import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconLink: React.FC<MyProps> = ({ color = '#23262F' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.25 5.25H13.5C13.9925 5.25 14.4801 5.347 14.9351 5.53545C15.39 5.72391 15.8034 6.00013 16.1517 6.34835C16.4999 6.69657 16.7761 7.10997 16.9645 7.56494C17.153 8.01991 17.25 8.50754 17.25 9C17.25 9.49246 17.153 9.98009 16.9645 10.4351C16.7761 10.89 16.4999 11.3034 16.1517 11.6517C15.8034 11.9999 15.39 12.2761 14.9351 12.4645C14.4801 12.653 13.9925 12.75 13.5 12.75H11.25M6.75 12.75H4.5C4.00754 12.75 3.51991 12.653 3.06494 12.4645C2.60997 12.2761 2.19657 11.9999 1.84835 11.6517C1.14509 10.9484 0.75 9.99456 0.75 9C0.75 8.00544 1.14509 7.05161 1.84835 6.34835C2.55161 5.64509 3.50544 5.25 4.5 5.25H6.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 9H12"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconLink
