import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icons/Icon';

export function ChevronRightIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4L14 10L7 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
