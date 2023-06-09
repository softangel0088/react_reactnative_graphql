import { Platform } from 'react-native'

export const theme = {
  colors: {
    shared: {
      SaleSpinPrimary: '#355DFF',
      SaleSpinSecondary: '#000000',
      transparent: 'rgba(0, 0, 0, 0)',
      white: '#FFFFFF',
      blue: '#355DFF',
      purple: '#9757D7',
      yellow: '#FFB21A',
      pink: '#EF466F',
      white_50: '#FFFFFF80',
      white_60: '#FFFFFF99',
      black_2: '#00000005',
      black_3: '#00000008',
      black_4: '#0000000A',
      black_6: '#0000000F',
      black_9: '#00000017',
      black_10: '#0000001A',
      black_15: '#00000026',
      black_18: '#0000002E',
      black_20: '#3A3E4333',
      brightBlue: '#3972F9',
      brightBlue_15: '#3772FF26',
      brightBlue_20: '#3972F933',
      blueLink: '#004CFF',
      blueGentianFlower: '#355DFF',
      softBlack: '#23262F',
      darkerGray: '#808191',
      darkGray: '#6F767E',
      gray: '#7C7C7C',
      gray2: '#777E90',
      softGray: '#DEE0E2',
      soft2Gray: '#545658',
      soft3Gray: '#363636',
      soft4Gray: '#D0D0D0',
      soft4Gray_50: '#D0D0D080',
      soft4Gray_6: '#D0D0D00F',
      soft4Gray_65: '#D0D0D0A6',
      soft5Gray: '#696969',
      soft6Gray: '#F4F4F4',
      soft7Gray: '#E8EBF1',
      soft8Gray: '#A4A4A4',
      softerGray: '#E2E4E6',
      softer2Gray: '#E6E8EC',
      softer3Gray: '#E3E3E3',
      softer4Gray: '#E6E6E6',
      softer5Gray: '#F5F5F5',
      softer6Gray: '#F7F7F7',
      softer7Gray: '#CCCCCC',
      softer7Gray_25: '#CCCCCC40',
      lightAliceBlue: '#FAFAFA',
      aliceBlue: '#F4F7FE',
      softViolet: '#c6c4dc',
      lavenderBlue: '#CABDFF',
      redStop: '#FF2626',
      redOrange: '#FF4500',
      redOrange_20: '#FF450033',
      redText: '#FF363C',
      orange: '#FF592C',
      fireOrange: '#FF9158',
      fireOrange_20: '#FF915833',
      purple1: '#7F60FF',
      purple1_34: '#CABDFF57',
      purple2: '#FC00E3',
      purple2_15: '#FC00E326',
      lightBlue: '#4AC7FF',
      lightBlue_34: '#B1E5FC57',
      green: '#00B976',
      green_10: '#00B9761A',
      green2: '#00A642',
      green3: '#02FF76',
      green3_15: '#02FF7626',
      green4: '#45B26B',
      lightGreen: '#B5E4CA',
      lightGreen2: '#11ED8B',
      lightGreen3: '#A5FF9E',
      tosca: '#00F1B7',
      tosca_10: '#00F1B71A',
      darkPink: '#F00073',
      darkPink_15: '#F0007326',
      darkPink2: '#BF00A0',
      darkPink2_15: '#BF00A026',
      masterCardYellow: '#F79E1B',
      masterCardYellow_15: '#F79E1B26'
    },
    light: {
      background: '#999999'
    },
    dark: {
      background: '#1A1D1F'
    }
  },
  font: {
    header:
      Platform.OS === 'android'
        ? 'Roboto'
        : Platform.OS === 'ios'
        ? 'Arial'
        : 'Arial'
  }
}
