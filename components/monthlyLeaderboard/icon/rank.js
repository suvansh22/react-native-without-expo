import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';

const RankSVG = props => (
  <Svg
    width={26}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={0}
      width={22}
      height={24}>
      <Path
        d="M12.354.42c.4-.23.892-.23 1.293 0l9.102 5.256c.4.23.647.657.647 1.12v10.51c0 .462-.247.889-.647 1.12l-9.102 5.256c-.4.23-.893.23-1.293 0L3.25 18.425a1.293 1.293 0 0 1-.647-1.12V6.796c0-.463.247-.89.647-1.12L12.354.42Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#F0F4F7" d="M.996.047h24.008v24.008H.996z" />
    </G>
  </Svg>
);

export default RankSVG;
