import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'

interface MyProps {
  color?: string
}

const IconMacCommand: React.FC<MyProps> = ({ color = 'white' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.33333 1.00006C8.89131 1.00006 8.46738 1.15931 8.15482 1.44277C7.84226 1.72623 7.66667 2.11068 7.66667 2.51155V8.55751C7.66667 8.95838 7.84226 9.34284 8.15482 9.6263C8.46738 9.90975 8.89131 10.069 9.33333 10.069C9.77536 10.069 10.1993 9.90975 10.5118 9.6263C10.8244 9.34284 11 8.95838 11 8.55751C11 8.15664 10.8244 7.77218 10.5118 7.48873C10.1993 7.20527 9.77536 7.04602 9.33333 7.04602H2.66667C2.22464 7.04602 1.80072 7.20527 1.48816 7.48873C1.17559 7.77218 1 8.15664 1 8.55751C1 8.95838 1.17559 9.34284 1.48816 9.6263C1.80072 9.90975 2.22464 10.069 2.66667 10.069C3.10869 10.069 3.53262 9.90975 3.84518 9.6263C4.15774 9.34284 4.33333 8.95838 4.33333 8.55751V2.51155C4.33333 2.11068 4.15774 1.72623 3.84518 1.44277C3.53262 1.15931 3.10869 1.00006 2.66667 1.00006C2.22464 1.00006 1.80072 1.15931 1.48816 1.44277C1.17559 1.72623 1 2.11068 1 2.51155C1 2.91242 1.17559 3.29688 1.48816 3.58034C1.80072 3.8638 2.22464 4.02304 2.66667 4.02304H9.33333C9.77536 4.02304 10.1993 3.8638 10.5118 3.58034C10.8244 3.29688 11 2.91242 11 2.51155C11 2.11068 10.8244 1.72623 10.5118 1.44277C10.1993 1.15931 9.77536 1.00006 9.33333 1.00006Z"
        fill={color}
        stroke="#545658"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconMacCommand