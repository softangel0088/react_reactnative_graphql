import '../styles/global.scss'
import 'raf/polyfill'
// @ts-ignore
global.setImmediate = requestAnimationFrame
import 'setimmediate'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apolloClient'
import 'swiper/css'
import 'swiper/css/pagination'
import { RecoilRoot } from 'recoil'
import { DataProvider } from 'shared/DataProvider'
import { DebugObserver } from 'shared/state'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ClientEye Dashboard</title>
        <meta key="title" name="title" content="ClientEye Dashboard" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <RecoilRoot>
        <DebugObserver />
        <ApolloProvider client={apolloClient}>
          <DataProvider>
            <SafeAreaProvider>
              <NativeBaseProvider
                theme={extendTheme({
                  fonts: {
                    body: 'Poppins',
                    quicksand: 'Quicksand, sans-serif',
                    dm_sans: 'DM Sans, sans-serif',
                    tauri: 'Tauri, sans-serif',
                    card: 'Nunito',
                    card_title: 'Sk-Modernist, sans-serif',
                    card_name: 'AirbnbCereal_W_Md'
                  }
                })}
              >
                <Component {...pageProps} />
              </NativeBaseProvider>
            </SafeAreaProvider>
          </DataProvider>
        </ApolloProvider>
      </RecoilRoot>
    </>
  )
}
