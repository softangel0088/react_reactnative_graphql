import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'

interface MyProps {}

const DiscordWordmarkLogo: React.FC<MyProps> = ({}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 173 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_0_85)">
        <Path
          d="M172.419 7.94066V25.2034H166.648V22.0626C166.16 23.2455 165.42 24.1465 164.423 24.7614C163.428 25.3742 162.195 25.6838 160.736 25.6838C159.43 25.6838 158.292 25.3614 157.318 24.7145C156.347 24.0675 155.596 23.1793 155.067 22.0519C154.543 20.9246 154.278 19.652 154.278 18.2257C154.261 16.7567 154.541 15.4372 155.114 14.2693C155.688 13.1013 156.499 12.1918 157.541 11.5363C158.585 10.8829 159.777 10.5541 161.112 10.5541C163.862 10.5541 165.707 11.769 166.648 14.1988V7.94066H172.419ZM165.786 20.3267C166.376 19.7438 166.667 18.9858 166.667 18.0613C166.667 17.1688 166.383 16.4386 165.809 15.8792C165.238 15.3219 164.453 15.0401 163.468 15.0401C162.495 15.0401 161.718 15.324 161.136 15.8941C160.554 16.4621 160.265 17.1987 160.265 18.1104C160.265 19.0221 160.554 19.7652 161.136 20.3395C161.718 20.916 162.486 21.2021 163.445 21.2021C164.416 21.2 165.197 20.9075 165.786 20.3267ZM153.244 11.4402V16.6201C152.645 16.2187 151.87 16.0201 150.912 16.0201C149.656 16.0201 148.689 16.4066 148.015 17.1816C147.338 17.9567 147.002 19.1609 147.002 20.7922V25.2034H141.231V11.1776H146.885V15.6358C147.197 14.0066 147.706 12.8046 148.406 12.0274C149.102 11.2523 150.002 10.8658 151.1 10.8658C151.933 10.8658 152.645 11.058 153.244 11.4402ZM125.296 24.676C123.937 24.0056 122.902 23.0875 122.187 21.9195C121.474 20.7516 121.115 19.4492 121.115 18.0101C121.115 16.571 121.47 15.2877 122.187 14.1604C122.904 13.033 123.933 12.1491 125.288 11.5085C126.636 10.868 128.247 10.5498 130.115 10.5498C131.983 10.5498 133.594 10.868 134.945 11.5085C136.295 12.1491 137.324 13.0266 138.03 14.1476C138.738 15.2664 139.092 16.5518 139.092 18.0079C139.092 19.4449 138.738 20.7473 138.03 21.9153C137.324 23.0832 136.29 24.0013 134.932 24.6739C133.571 25.3443 131.966 25.6796 130.113 25.6796C128.258 25.6796 126.653 25.3486 125.296 24.676ZM132.454 20.4228C133.027 19.8399 133.316 19.0691 133.316 18.1104C133.316 17.1517 133.029 16.3874 132.454 15.8215C131.882 15.2536 131.101 14.9696 130.113 14.9696C129.105 14.9696 128.318 15.2536 127.744 15.8215C127.171 16.3895 126.886 17.1517 126.886 18.1104C126.886 19.0691 127.171 19.8399 127.744 20.4228C128.315 21.0036 129.105 21.2982 130.113 21.2982C131.101 21.2961 131.882 21.0036 132.454 20.4228ZM108.558 24.676C107.208 24.0056 106.19 23.0939 105.509 21.943C104.829 20.7922 104.486 19.4961 104.486 18.0592C104.486 16.6201 104.839 15.3326 105.546 14.1988C106.254 13.065 107.29 12.1725 108.657 11.5256C110.022 10.8786 111.655 10.5562 113.555 10.5562C115.911 10.5562 117.867 11.0601 119.42 12.0679V16.4557C118.872 16.0713 118.233 15.7596 117.503 15.5205C116.773 15.2813 115.992 15.1596 115.158 15.1596C113.696 15.1596 112.556 15.4308 111.732 15.9753C110.908 16.5197 110.493 17.2286 110.493 18.1104C110.493 18.973 110.893 19.6776 111.695 20.2328C112.496 20.7858 113.655 21.0634 115.181 21.0634C115.964 21.0634 116.739 20.9459 117.503 20.7175C118.263 20.4826 118.919 20.1986 119.467 19.8634V24.1081C117.743 25.1629 115.74 25.6902 113.461 25.6902C111.543 25.6838 109.909 25.3486 108.558 24.676ZM91.8807 25.1799C90.6075 24.8447 89.4605 24.3579 88.4399 23.7174V19.7374C89.2123 20.3438 90.2437 20.8434 91.5405 21.2363C92.835 21.627 94.0868 21.8235 95.298 21.8235C95.865 21.8235 96.2909 21.7466 96.5797 21.5971C96.8707 21.4455 97.0163 21.2641 97.0163 21.0548C97.0163 20.8157 96.9371 20.6171 96.7787 20.457C96.6204 20.2947 96.3144 20.1623 95.8607 20.0492L93.034 19.4022C91.4163 19.0179 90.2673 18.4862 89.5847 17.8051C88.9021 17.1261 88.5618 16.2358 88.5618 15.134C88.5618 14.2052 88.8571 13.4003 89.4563 12.7106C90.0533 12.0231 90.9007 11.4914 92.0005 11.1178C93.1025 10.742 94.3864 10.5541 95.865 10.5541C97.1832 10.5541 98.3922 10.6972 99.492 10.9854C100.592 11.2736 101.501 11.6388 102.225 12.0871V15.8536C101.484 15.403 100.635 15.0507 99.6675 14.7838C98.7003 14.5191 97.7095 14.391 96.6846 14.391C95.2081 14.391 94.472 14.6472 94.472 15.1575C94.472 15.3966 94.5854 15.576 94.8144 15.6956C95.0433 15.8151 95.4627 15.939 96.0726 16.0692L98.4285 16.5005C99.9671 16.7695 101.114 17.2457 101.867 17.9247C102.623 18.6036 102.999 19.6072 102.999 20.9352C102.999 22.3914 102.376 23.5465 101.127 24.4027C99.8793 25.2589 98.1076 25.686 95.8137 25.686C94.4634 25.6838 93.1517 25.5152 91.8807 25.1799ZM80.1096 14.4828C81.8728 15.2557 84.0596 15.2899 85.8635 14.4828V25.2782H80.1096V14.4828ZM82.9897 12.67C84.5775 12.67 85.8657 11.4914 85.8657 10.0395C85.8657 8.58761 84.5775 7.409 82.9897 7.409C81.3999 7.409 80.1117 8.58761 80.1117 10.0395C80.1117 11.4914 81.3999 12.67 82.9897 12.67ZM58.737 8.41893H67.9233C70.138 8.41893 72.0082 8.77124 73.5424 9.4737C75.0746 10.1762 76.2215 11.1562 76.9833 12.4095C77.7429 13.6629 78.1259 15.0998 78.1259 16.7162C78.1259 18.2983 77.7279 19.7331 76.9341 21.0185C76.1402 22.306 74.9333 23.3223 73.3071 24.0739C71.6829 24.8234 69.6694 25.2013 67.2642 25.2013H58.737V8.41893ZM67.1701 20.9352C68.6594 20.9352 69.8085 20.5552 70.6088 19.7993C71.409 19.0371 71.8092 18.0037 71.8092 16.6927C71.8092 15.4756 71.4518 14.5063 70.7393 13.7803C70.0267 13.0544 68.9461 12.6871 67.5017 12.6871H64.628V20.9352H67.1701ZM43.846 27.4731C40.1399 30.236 36.5471 31.91 33.0121 33.0053C32.137 31.8117 31.3645 30.5371 30.6947 29.2004C31.9646 28.7196 33.1885 28.1258 34.3517 27.4261C34.05 27.1998 33.7504 26.9628 33.4572 26.7215C26.5007 30.0011 18.853 30.0011 11.813 26.7215C11.5207 26.9646 11.2217 27.1995 10.9164 27.4261C12.0719 28.1179 13.2937 28.7136 14.5691 29.1962C13.8993 30.5371 13.1204 31.8075 12.2495 33.0032C8.71879 31.9057 5.12818 30.2317 1.42415 27.4731C0.666656 19.3872 2.18165 11.184 7.76657 2.7693C10.5376 1.4754 13.5013 0.53379 16.6019 0C16.9849 0.683251 17.4386 1.60564 17.7445 2.338C20.9757 1.84478 24.2368 1.84478 27.5278 2.338C27.8338 1.60564 28.2789 0.683251 28.6576 0C31.7539 0.53379 34.7154 1.47112 37.4844 2.7629C42.3268 9.9712 44.7341 18.0997 43.846 27.4731ZM19.3729 18.1403C19.4115 15.7425 17.6782 13.7761 15.5277 13.7761C13.3772 13.7761 11.6803 15.7447 11.6803 18.1403C11.6803 20.5338 13.4136 22.5003 15.5277 22.5003C17.6782 22.5003 19.3772 20.5338 19.3729 18.1403ZM33.5878 18.1403C33.6263 15.7425 31.893 13.7761 29.7425 13.7761C27.592 13.7761 25.8951 15.7447 25.8951 18.1403C25.8951 20.5338 27.6284 22.5003 29.7425 22.5003C31.893 22.5003 33.5878 20.5338 33.5878 18.1403Z"
          fill="#393939"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_85">
          <Rect
            width="172.44"
            height="34"
            fill="white"
            transform="translate(0.322815)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DiscordWordmarkLogo
