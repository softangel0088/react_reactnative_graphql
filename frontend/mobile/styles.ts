import styledNative from 'styled-components/native'

import { theme } from '../shared/styles/theme'

export const MainContainer = styledNative.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.dark.background};
`
