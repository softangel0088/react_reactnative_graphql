import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {}

const IconTwitterWhite: React.FC<MyProps> = ({}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C8.9 0.5 7.3 2.5 7.8 4.5C5.1 4.4 2.7 3.1 1 1.1C0.1 2.6 0.6 4.5 2 5.5C1.5 5.5 1 5.3 0.5 5.1C0.5 6.6 1.6 8 3.1 8.4C2.6 8.5 2.1 8.6 1.6 8.5C2 9.8 3.2 10.8 4.7 10.8C3.5 11.7 1.7 12.2 0 12C1.5 12.9 3.2 13.5 5 13.5C11.1 13.5 14.5 8.4 14.3 3.7C15 3.3 15.6 2.7 16 2Z"
        fill="white"
      />
    </Svg>
  )
}

export default IconTwitterWhite