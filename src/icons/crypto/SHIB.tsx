import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const SHIB = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 641.7 649" {...props} ref={iconRef || ref}>
      <g transform="translate(-953.348 -232.003)">
        <g>
          <path
            fill="#F00500"
            d="M1423.2,289.1c-16.7,16.7-32,34.8-45.6,54.1l-4.3-1.4c-24.8-8.1-50.5-13.1-76.4-14.8
			c-7.8-0.6-36.9-0.6-46.4,0c-28.7,1.9-50.7,6.2-75.7,14.9c-1,0.4-1.9,0.7-2.8,1c-14.1-19.2-29.8-37.2-47.1-53.7
			c83-42.5,180.1-47.6,267-14.1c9.3,3.5,18.4,7.6,27.3,12L1423.2,289.1z"
          />
          <path
            fill="#F00500"
            d="M1578,668.4c-12.6,35.9-31.5,69.2-56,98.2c-13.3,15.6-28,29.9-43.8,42.9
			c-37,29.8-80.2,51.1-126.3,62.3c-51,12.3-104.2,12.3-155.2,0c-46.2-11.2-89.3-32.5-126.3-62.3c-15.8-13-30.5-27.3-43.8-42.9
			c-70.5-83.3-91.9-197.7-56-300.8c6.8-19.1,15.3-37.5,25.5-55c4.7-8,10.5-17,13.3-20.7c9.6,41.3,21.4,77.6,25.8,90.7
			c-0.3,0.7-0.7,1.5-1.1,2.2c-23.3,47.2-35.9,92.7-38.9,141.1c0,0.6-0.1,1.3-0.1,1.9c-0.8,14.5-0.4,21.4,2,30.5
			c7.5,28.5,30.6,59.9,66.8,90.7c59.3,50.4,139.7,86.8,200.6,91c63.5,4.3,157.2-32.8,219.6-87c9.8-8.7,19-17.9,27.6-27.7
			c6.2-7.2,15.4-19.6,14.7-19.6c-0.2,0,0-0.2,0.4-0.4c0.3-0.2,0.6-0.5,0.4-0.7c-0.1-0.1,0.1-0.4,0.4-0.5c0.3-0.1,0.5-0.3,0.4-0.5
			s0-0.4,0.4-0.5c0.3-0.1,0.4-0.4,0.3-0.6c-0.1-0.2,0-0.4,0.2-0.4c0.2,0,0.4-0.3,0.4-0.5s0.2-0.5,0.4-0.5c0.2,0,0.4-0.2,0.4-0.4
			c0.3-0.8,0.8-1.6,1.3-2.3c1.5-2.3,7.5-13,8.3-14.8c5.7-12.9,9.3-24.4,11-35.9c0.8-5.5,1.3-15.6,0.9-18c-0.1-0.4-0.1-1.1-0.2-2.2
			c-0.2-2-0.3-5-0.5-8c-0.2-4.5-0.6-10.8-0.9-13.9c-4.3-45.4-15.9-82.5-37.9-121.8c-0.9-1.5-1.7-3-2.2-4.2c-0.2-0.3-0.3-0.6-0.4-0.8
			v0c3.1-9.3,15.8-48.2,25.9-92.7l0.2,0.2l1.5,2c2.6,3.5,9.5,13.9,12.6,18.9c14.1,23,25.1,47.7,32.9,73.5
			C1600.7,541,1599.2,607.2,1578,668.4z"
          />
          <path
            d="M1448.2,548.9c-0.3,1.6-5,6.4-9.7,9.9c-13.8,10.1-38.5,19.5-63.6,24c-14.3,2.6-28.6,3-32.9,0.9
			c-2.8-1.4-3.2-2.5-2.2-6.1c2.1-7.5,8.9-15.7,19.5-23.4c5.4-3.9,27.3-17.2,37.5-22.8c16.8-9.2,30.4-14.7,39.6-16
			c2.9-0.4,6.4-0.5,7.5,0c1.8,0.7,3.8,6,4.6,12.4C1448.9,531.2,1448.7,546.2,1448.2,548.9z"
          />
          <path
            d="M1212.6,582c-0.6,1.2-3.6,2.5-7,3c-3.4,0.5-13.8,0.2-19.7-0.5c-21.2-2.8-43.7-9.3-60.1-17.3
			c-9.2-4.5-15.8-9-20.7-13.9l-2.8-2.9l-0.3-3.8c-0.5-6.6-0.4-17,0.4-20.7c0.5-3.1,1.6-6.1,3.1-8.8c0.8-1,0.8-1,4.4-1
			c4.4,0,8.1,0.7,14.1,2.6c12.3,3.8,30.6,13,52.9,26.4c18.4,11,25.3,16.4,30.6,23.8C1211.1,573.5,1213.5,580,1212.6,582z"
          />
          <path
            d="M1354.2,721.2c0,0.3-1.2,5.1-2.7,10.8c-1.5,5.7-2.7,10.3-2.7,10.5c-1.1,0.1-2.1,0.2-3.2,0.1h-3.2L1338,753
			c-2.4,5.7-4.6,11-4.9,11.8l-0.6,1.4l-2.1-3.4l-2.1-3.4v-27.7l-0.8,0.2c-1.7,0.4-13.8,2-19.1,2.5c-21.9,2.2-43.9,1.7-65.7-1.4
			c-3.5-0.5-6.5-0.9-6.6-0.8c-0.1,0.1,0,6.5,0.2,14.4l0.3,14.2l-1.7,2.6c-0.9,1.4-1.8,2.6-1.8,2.7c-0.3,0.3-1.3-1.3-3.6-5.9
			c-2.5-4.8-4.3-9.9-5.6-15.2l-0.7-2.9l-3.1,0.2l-3.1,0.3l-0.8-3.7c-0.4-2-0.9-5.1-1.1-6.8l-0.3-3.2l-2.6-2.3
			c-1.5-1.3-3-2.6-3.3-2.8c-0.5-0.4-0.7-1.1-0.7-1.7v-1.2l12.5,0.1l12.5,0.1l0.4,1.3l0.4,1.3l4.3,0.2c2.4,0.1,10,0.3,16.8,0.5
			l12.5,0.3l3.2-5l3.3-5h4.2l-0.1-10.4l-0.1-10.4l-5.5-2.4c-17.7-7.8-28.1-16.7-32-27.5c-0.8-2.2-0.8-3-1-13
			c-0.1-9.9-0.1-10.8,0.6-13c1.4-5,5.3-8.9,10.3-10.2c1.7-0.5,6.2-0.5,29.8-0.5l27.8,0.1l3.1,1.5c3.7,1.8,5.4,3.1,7.5,5.9
			c2.4,3.2,3.1,5.7,3.1,11.8c0,8.7-0.6,16.2-1.5,19.2c-1.3,4.1-3.3,8-5.8,11.5c-5,6.4-14.1,12.8-22.4,15.7l-2.4,0.9l0.1,10.5
			l0.1,10.5l2.2,0.2l2.2,0.2l3,4.5l2.9,4.5l13.4,0c7.4,0,13.9,0.1,14.5,0.2c1,0.2,1.2,0.1,2.2-1.6l1.2-1.8h11.5
			C1351.6,720.7,1354.2,720.9,1354.2,721.2z"
          />
          <path
            d="M1301.4,749.9c-1.9,1.1-3.2,1.6-3.5,1.4c-0.3-0.1-1.7-1.3-3.2-2.4l-2.7-2.2l-2.8,3c-6.1,6.6-6.3,6.9-8.1,7
			c-2.8,0.3-3.4-0.2-6.8-5.3c-1.8-2.6-3.2-4.8-3.2-4.8c0,0-1.3-0.2-2.8-0.3l-2.8-0.3l-1.3,2.7l-1.3,2.7l-2.3-0.7
			c-1.8-0.6-3.6-1.3-5.3-2.1l-3-1.5v-5.7l26.6,0.1l26.6,0.1l0.1,2.7C1305.7,747.5,1305.8,747.4,1301.4,749.9z"
          />
        </g>
        <path
          fill="#FFFFFF"
          d="M1551.4,627.9c-0.1-0.4-0.1-1.1-0.2-2.2c-24-2.6-92.5-4.2-156.1,48.3c0,0-20.5-94-116.5-94
		s-131.6,94-131.6,94c-53.8-57.9-125.8-53.7-151.8-49.9c0,0.6-0.1,1.3-0.1,1.9c-0.8,14.5-0.4,21.4,2,30.5
		c7.5,28.5,30.6,59.9,66.8,90.7c59.3,50.4,139.7,86.8,200.6,91c63.5,4.3,157.2-32.8,219.6-87c9.8-8.7,19-17.9,27.6-27.7
		c6.2-7.2,15.4-19.6,14.7-19.6c-0.2,0,0-0.2,0.4-0.4c0.3-0.2,0.6-0.5,0.4-0.7c-0.1-0.1,0.1-0.4,0.4-0.5c0.3-0.1,0.5-0.3,0.4-0.5
		s0-0.4,0.4-0.5c0.3-0.1,0.4-0.4,0.3-0.6c-0.1-0.2,0-0.4,0.2-0.4c0.2,0,0.4-0.3,0.4-0.5s0.2-0.5,0.4-0.5c0.2,0,0.4-0.2,0.4-0.4
		c0.3-0.8,0.8-1.6,1.3-2.3c1.5-2.3,7.5-13,8.3-14.8c5.7-12.9,9.3-24.4,11-35.9C1551.3,640.4,1551.8,630.3,1551.4,627.9z
		 M1301.4,749.9c-1.9,1.1-3.2,1.6-3.5,1.4c-0.3-0.1-1.7-1.3-3.2-2.4l-2.7-2.2l-2.8,3c-6.1,6.6-6.3,6.9-8.1,7
		c-2.8,0.3-3.4-0.2-6.8-5.3c-1.8-2.6-3.2-4.8-3.2-4.8c0,0-1.3-0.2-2.8-0.3l-2.8-0.3l-1.3,2.7l-1.3,2.7l-2.3-0.7
		c-1.8-0.6-3.6-1.3-5.3-2.1l-3-1.5v-5.7l26.6,0.1l26.6,0.1l0.1,2.7C1305.7,747.5,1305.8,747.4,1301.4,749.9z M1351.4,731.9
		c-1.5,5.7-2.7,10.3-2.7,10.5c-1.1,0.1-2.1,0.2-3.2,0.1h-3.2L1338,753c-2.4,5.7-4.6,11-4.9,11.8l-0.6,1.4l-2.1-3.4l-2.1-3.4v-27.7
		l-0.8,0.2c-1.7,0.4-13.8,2-19.1,2.5c-21.9,2.2-43.9,1.7-65.7-1.4c-3.5-0.5-6.5-0.9-6.6-0.8c-0.1,0.1,0,6.5,0.2,14.4l0.3,14.2
		l-1.7,2.6c-0.9,1.4-1.8,2.6-1.8,2.7c-0.3,0.3-1.3-1.3-3.6-5.9c-2.5-4.8-4.3-9.9-5.6-15.2l-0.7-2.9l-3.1,0.2l-3.1,0.3l-0.8-3.7
		c-0.4-2-0.9-5.1-1.1-6.8l-0.3-3.2l-2.6-2.3c-1.5-1.3-3-2.6-3.3-2.8c-0.5-0.4-0.7-1.1-0.7-1.7v-1.2l12.5,0.1l12.5,0.1l0.4,1.3
		l0.4,1.3l4.3,0.2c2.4,0.1,10,0.3,16.8,0.5l12.5,0.3l3.2-5l3.3-5h4.2l-0.1-10.4l-0.1-10.4l-5.5-2.4c-17.7-7.8-28.1-16.7-32-27.5
		c-0.8-2.2-0.8-3-1-13c-0.1-9.9-0.1-10.8,0.6-13c1.4-5,5.3-8.9,10.3-10.2c1.7-0.5,6.2-0.5,29.8-0.5l27.8,0.1l3.1,1.5
		c3.7,1.8,5.4,3.1,7.5,5.9c2.4,3.2,3.1,5.7,3.1,11.8c0,8.7-0.6,16.2-1.5,19.2c-1.3,4.1-3.3,8-5.8,11.5c-5,6.4-14.1,12.8-22.4,15.7
		l-2.4,0.9l0.1,10.5l0.1,10.5l2.2,0.2l2.2,0.2l3,4.5l2.9,4.5l13.4,0c7.4,0,13.9,0.1,14.5,0.2c1,0.2,1.2,0.1,2.2-1.6l1.2-1.8h11.5
		c8.9,0,11.5,0.1,11.5,0.4C1354.2,721.4,1352.9,726.3,1351.4,731.9z"
        />
        <path fill="none" d="M995,624.1c-6.3,0.9-10,1.9-10,1.9" />
        <path fill="none" d="M1560.1,627c0,0-3.2-0.7-8.9-1.3" />
        <path
          fill="#FFA409"
          d="M1550.6,617.7c-0.2-4.5-0.6-10.8-0.9-13.9c-4.3-45.4-15.9-82.5-37.9-121.8
		c-0.9-1.5-1.7-3-2.2-4.2c-0.2-0.3-0.3-0.6-0.4-0.8v0c3.1-9.3,15.8-48.2,25.9-92.7c13.7-60.4,22.4-131-4.2-152.2
		c0,0-46-3.4-107.6,57c-16.7,16.7-32,34.8-45.6,54.1l-4.3-1.4c-24.8-8.1-50.5-13.1-76.4-14.8c-7.8-0.6-36.9-0.6-46.4,0
		c-28.7,1.9-50.7,6.2-75.7,14.9c-1,0.4-1.9,0.7-2.8,1c-14.1-19.2-29.8-37.2-47.1-53.7c-64.1-60.7-111.8-57.2-111.8-57.2
		c-28.2,21.9-18.6,95.7-4,158.1c9.6,41.3,21.4,77.6,25.8,90.7c-0.3,0.7-0.7,1.5-1.1,2.2c-23.3,47.2-35.9,92.7-38.9,141.1
		c26.1-3.8,98-8.1,151.9,49.9c0,0,35.6-94,131.6-94s116.5,94,116.5,94c63.6-52.5,132.1-50.8,156.1-48.3
		C1551,623.7,1550.8,620.7,1550.6,617.7z M1053.9,443.1c0,0-37.4-93.5-27.8-146.9c0,0,0,0,0,0c1.6-9,4.6-16.9,9.3-22.9
		c0,0,42.4,4.2,110.8,80.2c0,0-13,6.3-30.4,19.7c0,0-0.1,0.1-0.2,0.1C1096.7,387.8,1072.5,410.8,1053.9,443.1L1053.9,443.1z
		 M1212.6,582c-0.6,1.2-3.6,2.5-7,3c-3.4,0.5-13.8,0.2-19.7-0.5c-21.2-2.8-43.7-9.3-60.1-17.3c-9.2-4.5-15.8-9-20.7-13.9l-2.8-2.9
		l-0.3-3.8c-0.5-6.6-0.4-17,0.4-20.7c0.5-3.1,1.6-6.1,3.1-8.8c0.8-1,0.8-1,4.4-1c4.4,0,8.1,0.7,14.1,2.6c12.3,3.8,30.6,13,52.9,26.4
		c18.4,11,25.3,16.4,30.6,23.8C1211.1,573.5,1213.5,580,1212.6,582z M1448.2,548.9c-0.3,1.6-5,6.4-9.7,9.9
		c-13.8,10.1-38.5,19.5-63.6,24c-14.3,2.6-28.6,3-32.9,0.9c-2.8-1.4-3.2-2.5-2.2-6.1c2.1-7.5,8.9-15.7,19.5-23.4
		c5.4-3.9,27.3-17.2,37.5-22.8c16.8-9.2,30.4-14.7,39.6-16c2.9-0.4,6.4-0.5,7.5,0c1.8,0.7,3.8,6,4.6,12.4
		C1448.9,531.2,1448.7,546.2,1448.2,548.9z M1431.6,373.2l-0.2-0.1c-16.8-13.4-29.4-19.7-29.4-19.7c66.1-76,107-80.2,107-80.2
		c4.5,6.1,7.4,13.9,9,22.9c0,0,0,0,0,0c9.3,53.4-26.8,147-26.8,147C1476.1,416.2,1455.8,392.4,1431.6,373.2L1431.6,373.2z"
        />
        <path fill="none" d="M1377.6,343.2c-0.2,0.2-0.3,0.5-0.5,0.7" />
        <path fill="none" d="M1509.1,476.9c-0.5,1.4-0.7,2.1-0.7,2.1" />
        <g>
          <g>
            <g>
              <path
                fill="#FF9300"
                d="M1518.1,296.1c-7.8-1-44.7-1.2-86.5,77.1l-0.2-0.1c-16.8-13.4-29.4-19.7-29.4-19.7
					c66.1-76,107-80.2,107-80.2C1513.6,279.3,1516.5,287.1,1518.1,296.1z"
              />
            </g>
            <path
              fill="#FF8300"
              d="M1491.3,443.1c-15.2-27-35.4-50.7-59.7-69.9c41.8-78.3,78.6-78.1,86.5-77.1c0,0,0,0,0,0
				C1527.4,349.6,1491.3,443.1,1491.3,443.1z"
            />
            <path
              fill="#FF8300"
              d="M1519.6,296.4c-0.5-0.1-1-0.2-1.5-0.3L1519.6,296.4z"
            />
          </g>
        </g>
        <path fill="none" d="M1175.1,347.1c-1-1.4-2.1-2.8-3.1-4.2" />
        <path fill="none" d="M1035,480.8c1.1,3.4,1.8,5.2,1.8,5.2" />
        <g>
          <g>
            <g>
              <path
                fill="#FF9300"
                d="M1146.2,353.4c0,0-13,6.3-30.4,19.7c0,0-0.1,0.1-0.2,0.1c-43.3-78.4-81.4-78.1-89.6-77.1
					c1.6-9,4.6-16.9,9.3-22.9C1035.4,273.2,1077.8,277.4,1146.2,353.4z"
              />
            </g>
            <path
              fill="#FF8300"
              d="M1115.7,373.2c-19,14.6-43.2,37.5-61.8,69.9c0,0-37.4-93.5-27.8-147c0,0,0,0,0,0
				C1034.2,295.1,1072.4,294.9,1115.7,373.2z"
            />
            <path
              fill="#FF8300"
              d="M1026.1,296.1c-0.5,0.1-1.1,0.2-1.6,0.3L1026.1,296.1z"
            />
          </g>
        </g>
        <path
          fill="#FFFFFF"
          d="M1390.1,495c0,0-32,2-28-23s29-28,36-27s35,11,30,32s-12,17-16,18S1390.1,495,1390.1,495z"
        />
        <path
          fill="#FFFFFF"
          d="M1154.1,495c0,0-32,2-28-23s29-28,36-27s35,11,30,32s-12,17-16,18S1154.1,495,1154.1,495z"
        />
      </g>
    </SvgIcon>
  );
});

export default SHIB;
