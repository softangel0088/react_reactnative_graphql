const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withTM = require('next-transpile-modules')([
  'solito',
  'shared',
  '@gorhom/bottom-sheet',
  '@gorhom/portal',
  'dripsy',
  '@dripsy/core',
  'react-native-web',
  'react-native-svg',
  'native-base',
  'react-native-svg'
])

const nextConfig = {
  webpack: (config) => {
    return config
  },
  images: {
    // taken from: https://github.com/axeldelafosse/expo-next-monorepo-example/issues/18
    // but still need to confirm that this doesn't prevent us from displaying a favicon
    disableStaticImages: true
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true
  },
  future: {
    webpack5: true
  }
}

module.exports = withPlugins(
  [
    withTM,
    withBundleAnalyzer,
    [withFonts, { projectRoot: __dirname + '/..' }],
    [
      withImages,
      {
        projectRoot: __dirname,
        serverRuntimeConfig: {}
      }
    ],
    [withExpo, { projectRoot: __dirname + '/..' }]
  ],
  nextConfig
)
