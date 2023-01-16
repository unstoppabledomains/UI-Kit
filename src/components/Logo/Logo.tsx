import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import {useTheme} from '@mui/material/styles';
import React from 'react';

import LogoAsRay from './LogoAsRay';
import LogoAsRayWithText from './LogoAsRayWithText';
import LogoWithText from './LogoWithText';

export enum LogoTheme {
  Primary = 'primary',
  White = 'white',
  WhiteWithRay = 'whiteWithRay',
  PrimaryWithText = 'primaryWithText',
  BlackWithTextAndRay = 'blackWithTextAndRay',
}

const usePathColors = (type: LogoTheme): Array<string> => {
  const {
    palette: {secondary, primary, white},
  } = useTheme();

  switch (type) {
    case LogoTheme.White:
      return [secondary.main, white];
    default:
      return [secondary.main, primary.main];
  }
};

type UDLogoProps = SvgIconProps & {
  theme?: LogoTheme;
  inverse?: boolean;
};

const Logo = ({theme = LogoTheme.Primary, ...props}: UDLogoProps) => {
  const [pathFillColor1, pathFillColor2] = usePathColors(theme);

  switch (theme) {
    case LogoTheme.WhiteWithRay:
      return <LogoAsRay {...props} />;

    case LogoTheme.PrimaryWithText:
      return <LogoWithText {...props} />;

    case LogoTheme.BlackWithTextAndRay:
      return <LogoAsRayWithText {...props} />;

    default:
      return (
        <SvgIcon viewBox="0 0 40 40" data-testid={`${theme}Logo`} {...props}>
          <path
            d="M38.3333 3.90803V16.5517L1.66666 31.4942L38.3333 3.90803Z"
            fill={pathFillColor1}
          />
          <path
            d="M31.4583 3.33333V25.1724C31.4583 31.5203 26.3281 36.6667 20 36.6667C13.6719 36.6667 8.54166 31.5203 8.54166 25.1724V15.977L15.4167 12.1839V25.1724C15.4167 26.2394 15.8392 27.2626 16.5913 28.0171C17.3434 28.7716 18.3635 29.1954 19.4271 29.1954C20.4907 29.1954 21.5108 28.7716 22.2629 28.0171C23.015 27.2626 23.4375 26.2394 23.4375 25.1724V7.75862L31.4583 3.33333Z"
            fill={pathFillColor2}
          />
        </SvgIcon>
      );
  }
};

export default Logo;
