import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const Discord = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 48 48" {...props}>
      <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM28.2236 12C30.3945 12.3764 32.4709 13.0375 34.4129 13.9472C37.8083 19.0238 39.4954 24.7494 38.8725 31.3533C36.2746 33.298 33.7545 34.4779 31.2769 35.25C30.6635 34.408 30.1208 33.5104 29.6512 32.5694C30.5455 32.2291 31.4044 31.8093 32.2161 31.3195C32.0037 31.1603 31.7937 30.9938 31.5884 30.8225C26.7111 33.134 21.3477 33.134 16.4115 30.8225C16.2086 30.9938 15.9986 31.1603 15.7838 31.3195C16.5932 31.8069 17.4497 32.2267 18.344 32.567C17.8744 33.5104 17.3294 34.4055 16.7182 35.2476C14.243 34.4755 11.7253 33.2956 9.1274 31.3533C8.59649 25.6566 9.6583 19.8779 13.5752 13.952C15.5172 13.04 17.596 12.3764 19.7692 12C20.0382 12.4826 20.3567 13.1316 20.5714 13.648C22.8367 13.3005 25.1231 13.3005 27.4308 13.648C27.6455 13.1316 27.957 12.4826 28.2236 12ZM16.3194 24.7783C16.3194 26.4649 17.5347 27.8499 19.0165 27.8499C20.5243 27.8499 21.7158 26.4649 21.7135 24.7783C21.7395 23.0894 20.5243 21.7044 19.0165 21.7044C17.5087 21.7044 16.3194 23.0918 16.3194 24.7783ZM26.2864 24.7783C26.2864 26.4649 27.5016 27.8499 28.9834 27.8499C30.4912 27.8499 31.6805 26.4649 31.6805 24.7783C31.7064 23.0894 30.4912 21.7044 28.9834 21.7044C27.4756 21.7044 26.2864 23.0918 26.2864 24.7783Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

Discord.muiName = 'DiscordIcon';

export default Discord;
