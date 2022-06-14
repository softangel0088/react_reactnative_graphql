import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconInsertMore: React.FC<MyProps> = ({
  color = '#323232',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M11.6875 9.20834H7.43748V13.4583H6.02081V9.20834H1.77081V7.79167H6.02081V3.54167H7.43748V7.79167H11.6875V9.20834ZM15.2291 12.3958C15.2291 12.606 15.1668 12.8114 15.0501 12.9861C14.9333 13.1609 14.7674 13.297 14.5732 13.3775C14.3791 13.4579 14.1655 13.4789 13.9594 13.4379C13.7533 13.3969 13.5639 13.2957 13.4153 13.1471C13.2668 12.9985 13.1656 12.8092 13.1246 12.6031C13.0836 12.397 13.1046 12.1834 13.185 11.9892C13.2654 11.7951 13.4016 11.6292 13.5764 11.5124C13.7511 11.3957 13.9565 11.3333 14.1666 11.3333C14.4484 11.3333 14.7187 11.4453 14.9179 11.6445C15.1172 11.8438 15.2291 12.114 15.2291 12.3958ZM15.2291 9.56251C15.2291 9.77265 15.1668 9.97807 15.0501 10.1528C14.9333 10.3275 14.7674 10.4637 14.5732 10.5441C14.3791 10.6245 14.1655 10.6456 13.9594 10.6046C13.7533 10.5636 13.5639 10.4624 13.4153 10.3138C13.2668 10.1652 13.1656 9.97589 13.1246 9.76979C13.0836 9.56368 13.1046 9.35005 13.185 9.1559C13.2654 8.96176 13.4016 8.79582 13.5764 8.67907C13.7511 8.56232 13.9565 8.50001 14.1666 8.50001C14.4484 8.50001 14.7187 8.61195 14.9179 8.8112C15.1172 9.01046 15.2291 9.28071 15.2291 9.56251ZM15.2291 6.72917C15.2291 6.93931 15.1668 7.14474 15.0501 7.31947C14.9333 7.49419 14.7674 7.63038 14.5732 7.71079C14.3791 7.79121 14.1655 7.81225 13.9594 7.77126C13.7533 7.73026 13.5639 7.62907 13.4153 7.48047C13.2668 7.33188 13.1656 7.14256 13.1246 6.93646C13.0836 6.73035 13.1046 6.51672 13.185 6.32257C13.2654 6.12842 13.4016 5.96248 13.5764 5.84574C13.7511 5.72899 13.9565 5.66667 14.1666 5.66667C14.4484 5.66667 14.7187 5.77861 14.9179 5.97787C15.1172 6.17713 15.2291 6.44738 15.2291 6.72917Z"
        fill={color} />
    </Svg>
  )
}

export default IconInsertMore