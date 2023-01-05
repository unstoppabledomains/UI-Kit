import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Web = React.forwardRef<SVGSVGElement | null, SvgIconProps>(
  (props, ref) => {
    const {classes} = useStyles();
    const uuid = classes.id;

    return (
      <SvgIcon viewBox="0 0 25 24" {...props} ref={ref}>
        <g clipPath={`url(#${uuid})`}>
          <path
            d="M24.231 20.92C24.3169 20.837 24.3852 20.7375 24.4318 20.6276C24.4785 20.5176 24.5025 20.3994 24.5025 20.28C24.5025 20.1605 24.4785 20.0423 24.4318 19.9324C24.3852 19.8224 24.3169 19.723 24.231 19.64L21.601 17C21.5771 16.9775 21.558 16.9504 21.545 16.9203C21.532 16.8902 21.5252 16.8578 21.5252 16.825C21.5252 16.7922 21.532 16.7597 21.545 16.7296C21.558 16.6995 21.5771 16.6724 21.601 16.65L22.851 15.4C22.9606 15.2868 23.0394 15.1474 23.0796 14.995C23.1199 14.8427 23.1204 14.6826 23.081 14.53C23.0412 14.3775 22.9621 14.2381 22.8515 14.1258C22.741 14.0135 22.6029 13.9322 22.451 13.89L13.611 11.37C13.4564 11.3292 13.2939 11.3298 13.1396 11.3718C12.9854 11.4138 12.8449 11.4957 12.7324 11.6093C12.6199 11.7228 12.5392 11.864 12.4986 12.0186C12.458 12.1732 12.4588 12.3358 12.501 12.49L15.021 21.33C15.0635 21.4828 15.1447 21.622 15.2569 21.7341C15.369 21.8463 15.5082 21.9275 15.661 21.97C15.8147 22.001 15.9735 21.9954 16.1246 21.9537C16.2757 21.912 16.415 21.8354 16.531 21.73L17.661 20.6C17.6835 20.5761 17.7106 20.557 17.7407 20.544C17.7708 20.5309 17.8032 20.5242 17.836 20.5242C17.8688 20.5242 17.9013 20.5309 17.9314 20.544C17.9615 20.557 17.9886 20.5761 18.011 20.6L20.651 23.23C20.734 23.3159 20.8334 23.3842 20.9434 23.4308C21.0533 23.4775 21.1716 23.5015 21.291 23.5015C21.4104 23.5015 21.5287 23.4775 21.6386 23.4308C21.7486 23.3842 21.848 23.3159 21.931 23.23L24.231 20.92Z"
            fill="#62626A"
          />
          <path
            d="M9.30115 17.78C9.28713 17.7446 9.28137 17.7065 9.28431 17.6686C9.28724 17.6307 9.29879 17.5939 9.31808 17.5611C9.33737 17.5283 9.36388 17.5004 9.39561 17.4794C9.42733 17.4584 9.46343 17.4449 9.50115 17.44C9.72136 17.3601 9.90654 17.2054 10.0244 17.003C10.1422 16.8005 10.1853 16.5631 10.146 16.3322C10.1067 16.1013 9.98759 15.8915 9.80944 15.7394C9.63128 15.5873 9.40539 15.5025 9.17115 15.5H8.77115C8.70892 15.5086 8.64579 15.4925 8.59531 15.4551C8.54483 15.4177 8.51102 15.362 8.50115 15.3C8.25113 14.2177 8.12366 13.1107 8.12115 12C8.11995 11.0606 8.207 10.1231 8.38115 9.19997C8.3925 9.14433 8.42244 9.09421 8.46606 9.05786C8.50968 9.02151 8.56438 9.00109 8.62115 8.99997H16.6212C16.6779 9.00109 16.7326 9.02151 16.7762 9.05786C16.8199 9.09421 16.8498 9.14433 16.8612 9.19997C16.9435 9.6131 17.0036 10.0304 17.0412 10.45C17.0663 10.7152 17.1959 10.9595 17.4012 11.1293C17.6066 11.299 17.8709 11.3802 18.1362 11.355C18.4014 11.3298 18.6457 11.2003 18.8154 10.9949C18.9852 10.7895 19.0663 10.5252 19.0412 10.26C19.0412 9.91997 18.9711 9.59997 18.9212 9.25997C18.9154 9.22427 18.9179 9.18773 18.9283 9.1531C18.9386 9.11847 18.9567 9.08663 18.9811 9.05997C19.0059 9.03572 19.036 9.01765 19.069 9.00723C19.102 8.9968 19.137 8.99431 19.1712 8.99997H21.9711C22.0252 8.99997 22.0779 9.01751 22.1212 9.04997C22.1644 9.08242 22.196 9.12804 22.2111 9.17997C22.3428 9.60878 22.443 10.0466 22.5112 10.49C22.5509 10.7552 22.6944 10.9937 22.9101 11.1531C23.1258 11.3125 23.3959 11.3798 23.6611 11.34C23.9264 11.3002 24.1649 11.1567 24.3243 10.941C24.4837 10.7253 24.5509 10.4552 24.5112 10.19C24.165 7.92133 23.1756 5.79952 21.6602 4.0761C20.1448 2.35268 18.167 1.09993 15.9613 0.466365C13.7556 -0.167197 11.4145 -0.154997 9.21552 0.501521C7.01654 1.15804 5.05192 2.43134 3.55459 4.17046C2.05725 5.90958 1.09001 8.04158 0.767518 10.3137C0.445029 12.5858 0.780825 14.9028 1.73509 16.9899C2.68936 19.077 4.22208 20.8466 6.15154 22.0891C8.08099 23.3316 10.3263 23.9947 12.6212 24C12.8565 24.0042 13.0858 23.9254 13.2688 23.7772C13.4517 23.629 13.5765 23.4211 13.6212 23.19C13.8812 21.67 11.3112 22.19 9.30115 17.78ZM6.42115 15.2C6.44645 15.2677 6.44645 15.3423 6.42115 15.41C6.39685 15.4392 6.3662 15.4625 6.33155 15.4781C6.29689 15.4937 6.25913 15.5012 6.22115 15.5H3.44115C3.39003 15.4986 3.34057 15.4815 3.29944 15.4511C3.25831 15.4207 3.2275 15.3784 3.21115 15.33C2.82533 14.2619 2.62577 13.1356 2.62115 12C2.62345 11.0453 2.7615 10.0958 3.03115 9.17997C3.0463 9.12804 3.07788 9.08242 3.12115 9.04997C3.16442 9.01751 3.21706 8.99997 3.27115 8.99997H6.08115C6.11746 9.00027 6.15326 9.00848 6.18607 9.02402C6.21888 9.03957 6.24792 9.06207 6.27115 9.08997C6.29382 9.1175 6.31007 9.14973 6.31872 9.18433C6.32737 9.21892 6.3282 9.25501 6.32115 9.28997C6.18968 10.1873 6.12285 11.093 6.12115 12C6.12227 13.0736 6.2227 14.1448 6.42115 15.2ZM9.35115 6.99997C9.30978 7.00044 9.26893 6.99064 9.23228 6.97144C9.19563 6.95224 9.16432 6.92425 9.14115 6.88997C9.11906 6.85384 9.10736 6.81232 9.10736 6.76997C9.10736 6.72762 9.11906 6.6861 9.14115 6.64997C9.828 4.90363 10.9924 3.38579 12.5012 2.26997C12.544 2.24116 12.5945 2.22578 12.6462 2.22578C12.6978 2.22578 12.7483 2.24116 12.7912 2.26997C14.2999 3.38579 15.4643 4.90363 16.1511 6.64997C16.1683 6.68766 16.1771 6.72857 16.1771 6.76997C16.1771 6.81137 16.1683 6.85228 16.1511 6.88997C16.1238 6.92969 16.0859 6.96101 16.0418 6.98044C15.9976 6.99987 15.9489 7.00663 15.9011 6.99997H9.35115ZM21.0312 6.60997C21.0561 6.64873 21.0694 6.69386 21.0694 6.73997C21.0694 6.78608 21.0561 6.83121 21.0312 6.86997C21.0104 6.91016 20.9788 6.94368 20.9399 6.96668C20.901 6.98968 20.8563 7.00122 20.8111 6.99997H18.5611C18.5087 6.99917 18.4576 6.98251 18.4148 6.95217C18.372 6.92182 18.3393 6.87922 18.3211 6.82997C17.9233 5.58748 17.3365 4.41371 16.5812 3.34997C16.5493 3.30455 16.5322 3.25043 16.5322 3.19497C16.5322 3.1395 16.5493 3.08538 16.5812 3.03997C16.6175 2.99816 16.6666 2.96958 16.7209 2.95872C16.7752 2.94786 16.8316 2.95534 16.8811 2.97997C18.5773 3.77717 20.0153 5.03499 21.0312 6.60997ZM8.36115 2.99997C8.41108 2.97697 8.46701 2.97039 8.52091 2.98117C8.57481 2.99195 8.62391 3.01954 8.66115 3.05997C8.69299 3.10538 8.71007 3.1595 8.71007 3.21497C8.71007 3.27043 8.69299 3.32455 8.66115 3.36997C7.91432 4.43156 7.32802 5.59742 6.92115 6.82997C6.9048 6.87843 6.87399 6.92071 6.83286 6.95111C6.79173 6.98151 6.74227 6.99856 6.69115 6.99997H4.42115C4.37639 6.99907 4.33262 6.98664 4.29408 6.96386C4.25553 6.94109 4.22353 6.90874 4.20115 6.86997C4.17927 6.83013 4.16779 6.78542 4.16779 6.73997C4.16779 6.69452 4.17927 6.6498 4.20115 6.60997C5.22619 5.04412 6.66652 3.79421 8.36115 2.99997ZM4.56115 17.9C4.53492 17.8617 4.52089 17.8164 4.52089 17.77C4.52089 17.7236 4.53492 17.6782 4.56115 17.64C4.58043 17.5979 4.61145 17.5623 4.65048 17.5375C4.68951 17.5126 4.73489 17.4996 4.78115 17.5H6.85115C6.90141 17.4992 6.95065 17.5142 6.99192 17.5429C7.03319 17.5716 7.0644 17.6126 7.08115 17.66C7.47807 18.7231 8.00902 19.7312 8.66115 20.66C8.69705 20.7017 8.71679 20.7549 8.71679 20.81C8.71679 20.865 8.69705 20.9182 8.66115 20.96C8.6273 21.005 8.57871 21.0367 8.52386 21.0495C8.46902 21.0623 8.41142 21.0554 8.36115 21.03C6.85615 20.3153 5.55086 19.2402 4.56115 17.9Z"
            fill="#62626A"
          />
        </g>
        <defs>
          <clipPath id={uuid}>
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </SvgIcon>
    );
  },
);

export default Web;
