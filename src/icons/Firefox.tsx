import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Firefox = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    const {classes} = useStyles();
    const paths = [
      'M20.6997 8.49811C20.2917 7.51671 19.4653 6.45717 18.8164 6.12229C19.3445 7.15764 19.6502 8.19624 19.767 8.97135C19.767 8.97288 19.7676 8.97667 19.7688 8.98698C18.7073 6.34116 16.9073 5.27428 15.4375 2.95132C15.3633 2.83386 15.2889 2.71608 15.2164 2.59194C15.1795 2.52854 15.145 2.46375 15.113 2.39772C15.052 2.27983 15.0049 2.15521 14.9727 2.02639C14.9729 2.0203 14.9709 2.01433 14.9669 2.00968C14.963 2.00502 14.9574 2.00201 14.9514 2.00124C14.9456 1.99959 14.9395 1.99959 14.9337 2.00124C14.9324 2.00171 14.9305 2.00323 14.9291 2.00378C14.927 2.0046 14.9244 2.00647 14.9222 2.00768C14.9232 2.00628 14.9254 2.00311 14.9261 2.00237C12.5679 3.38346 11.7679 5.93835 11.6944 7.21659C10.7527 7.28133 9.85232 7.62828 9.1107 8.21221C9.03305 8.14663 8.95188 8.08534 8.86753 8.02862C8.65356 7.28002 8.64447 6.48771 8.84121 5.7344C7.87683 6.1735 7.12675 6.8676 6.58144 7.48049H6.5771C6.20496 7.00913 6.23121 5.45421 6.25242 5.12956C6.24796 5.10944 5.9748 5.27135 5.93902 5.29577C5.61063 5.53017 5.30362 5.79318 5.0216 6.08171C4.70067 6.40716 4.40744 6.75881 4.14496 7.13299C4.14496 7.13346 4.14468 7.13401 4.14453 7.13448C4.14453 7.13397 4.1448 7.13346 4.14496 7.13299C3.5413 7.98844 3.11317 8.95504 2.88531 9.97694C2.88082 9.99729 2.87703 10.0184 2.87265 10.0389C2.855 10.1215 2.7914 10.535 2.78027 10.6248C2.77941 10.6317 2.77902 10.6384 2.7782 10.6453C2.69598 11.0727 2.64506 11.5056 2.62585 11.9405C2.62585 11.9565 2.62488 11.9724 2.62488 11.9884C2.62503 17.1725 6.82816 21.3749 12.0127 21.3749C16.6559 21.3749 20.5111 18.0043 21.2659 13.5769C21.2818 13.4567 21.2945 13.336 21.3085 13.2148C21.4952 11.605 21.2878 9.91299 20.6997 8.49811ZM9.87957 15.8455C9.92347 15.8665 9.96472 15.8894 10.0098 15.9096C10.0117 15.9108 10.0143 15.9123 10.0162 15.9135C9.97029 15.8915 9.92475 15.8689 9.87957 15.8455V15.8455ZM19.7696 8.98928L19.7683 8.98018C19.7688 8.9835 19.7694 8.98698 19.7699 8.9903L19.7696 8.98928Z',
      'M20.6996 8.49887C20.2916 7.51746 19.4652 6.45793 18.8163 6.12305C19.3444 7.1584 19.6501 8.19699 19.7669 8.97211C19.7669 8.96985 19.7673 8.97399 19.7683 8.98094C19.7688 8.98426 19.7694 8.98774 19.7699 8.99106C20.6556 11.3922 20.1731 13.834 19.4777 15.326C18.402 17.6346 15.7975 20.0006 11.7209 19.8852C7.31636 19.7605 3.43613 16.4924 2.71179 12.212C2.5798 11.537 2.71179 11.1943 2.7782 10.6463C2.6973 11.0688 2.66648 11.1908 2.62585 11.9415C2.62585 11.9575 2.62488 11.9733 2.62488 11.9894C2.62496 17.1733 6.82808 21.3757 12.0126 21.3757C16.6558 21.3757 20.5111 18.0051 21.2658 13.5777C21.2817 13.4575 21.2944 13.3367 21.3085 13.2155C21.4951 11.6057 21.2878 9.91375 20.6996 8.49887Z',
      'M20.6996 8.49887C20.2916 7.51746 19.4652 6.45793 18.8163 6.12305C19.3444 7.1584 19.6501 8.19699 19.7669 8.97211C19.7669 8.96985 19.7673 8.97399 19.7683 8.98094C19.7688 8.98426 19.7694 8.98774 19.7699 8.99106C20.6556 11.3922 20.1731 13.834 19.4777 15.326C18.402 17.6346 15.7975 20.0006 11.7209 19.8852C7.31636 19.7605 3.43613 16.4924 2.71179 12.212C2.5798 11.537 2.71179 11.1943 2.7782 10.6463C2.6973 11.0688 2.66648 11.1908 2.62585 11.9415C2.62585 11.9575 2.62488 11.9733 2.62488 11.9894C2.62496 17.1733 6.82808 21.3757 12.0126 21.3757C16.6558 21.3757 20.5111 18.0051 21.2658 13.5777C21.2817 13.4575 21.2944 13.3367 21.3085 13.2155C21.4951 11.6057 21.2878 9.91375 20.6996 8.49887Z',
      'M16.1376 9.60125C16.1581 9.61563 16.1767 9.62992 16.1959 9.64422C15.9603 9.22608 15.667 8.84325 15.3245 8.50703C12.4063 5.58922 14.5593 2.18039 14.9224 2.00727C14.9234 2.00586 14.9256 2.0027 14.9263 2.00195C12.5681 3.38305 11.7681 5.93793 11.6945 7.21617C11.8039 7.20859 11.913 7.19941 12.0243 7.19941C13.7841 7.19941 15.3168 8.16699 16.1376 9.60125V9.60125Z',
      'M12.0302 10.1837C12.0149 10.4172 11.1898 11.2225 10.9013 11.2225C8.23181 11.2225 7.79849 12.8371 7.79849 12.8371C7.91673 14.1969 8.86337 15.3166 10.0099 15.9091C10.0622 15.9361 10.1151 15.9605 10.1681 15.9847C10.2589 16.0249 10.3508 16.0625 10.4438 16.0974C10.8369 16.2366 11.2487 16.316 11.6653 16.333C16.3442 16.5524 17.2507 10.7395 13.8741 9.05144C14.7388 8.90105 15.6364 9.24882 16.1377 9.60093C15.3169 8.1668 13.7842 7.19922 12.0244 7.19922C11.9131 7.19922 11.804 7.2084 11.6946 7.21598C10.7529 7.28071 9.85258 7.62767 9.11095 8.2116C9.25408 8.33269 9.41564 8.49457 9.75603 8.82988C10.3928 9.4575 12.0267 10.1074 12.0302 10.1837V10.1837Z',
      'M12.0302 10.1837C12.0149 10.4172 11.1898 11.2225 10.9013 11.2225C8.23181 11.2225 7.79849 12.8371 7.79849 12.8371C7.91673 14.1969 8.86337 15.3166 10.0099 15.9091C10.0622 15.9361 10.1151 15.9605 10.1681 15.9847C10.2589 16.0249 10.3508 16.0625 10.4438 16.0974C10.8369 16.2366 11.2487 16.316 11.6653 16.333C16.3442 16.5524 17.2507 10.7395 13.8741 9.05144C14.7388 8.90105 15.6364 9.24882 16.1377 9.60093C15.3169 8.1668 13.7842 7.19922 12.0244 7.19922C11.9131 7.19922 11.804 7.2084 11.6946 7.21598C10.7529 7.28071 9.85258 7.62767 9.11095 8.2116C9.25408 8.33269 9.41564 8.49457 9.75603 8.82988C10.3928 9.4575 12.0267 10.1074 12.0302 10.1837V10.1837Z',
      'M8.67301 7.89969C8.73839 7.94187 8.80325 7.98484 8.86758 8.0286C8.65361 7.28 8.64452 6.48769 8.84125 5.73438C7.87688 6.17348 7.1268 6.86758 6.58148 7.48047C6.6266 7.47919 7.98828 7.45469 8.67301 7.89969V7.89969Z',
      'M2.71187 12.2106C3.43621 16.491 7.31644 19.7591 11.7209 19.8838C15.7975 19.9992 18.4021 17.633 19.4778 15.3246C20.1731 13.8324 20.6557 11.391 19.77 8.98965L19.7696 8.98864L19.7684 8.97953C19.7674 8.97258 19.7668 8.96844 19.767 8.97071C19.767 8.97223 19.7676 8.97602 19.7688 8.98633C20.1018 11.1606 18.9958 13.267 17.2668 14.6912L17.2616 14.7034C13.8927 17.4465 10.6689 16.3584 10.0162 15.913C9.97029 15.8909 9.92471 15.8682 9.87945 15.8449C7.91531 14.9063 7.1039 13.1169 7.27789 11.5823C5.61941 11.5823 5.0539 10.1835 5.0539 10.1835C5.0539 10.1835 6.54293 9.1218 8.50539 10.0452C10.323 10.9004 12.0299 10.1836 12.0301 10.1835C12.0266 10.1072 10.3927 9.45731 9.75578 8.82973C9.41542 8.49442 9.25382 8.33274 9.1107 8.21145C9.03305 8.14586 8.95188 8.08457 8.86753 8.02786C8.80313 7.9842 8.73827 7.94123 8.67296 7.89895C7.98828 7.45395 6.62656 7.47844 6.58144 7.47961H6.5771C6.20496 7.00825 6.23121 5.45333 6.25242 5.12868C6.24796 5.10856 5.9748 5.27048 5.93902 5.29489C5.61063 5.52929 5.30362 5.7923 5.0216 6.08083C4.70066 6.40635 4.40743 6.75808 4.14496 7.13235C4.14496 7.13282 4.14468 7.13336 4.14453 7.13383C4.14453 7.13333 4.1448 7.13282 4.14496 7.13235C3.5413 7.98779 3.11317 8.9544 2.88531 9.97629C2.88082 9.99664 2.54742 11.4545 2.71187 12.2106V12.2106Z',
      'M15.3244 8.50725C15.6669 8.84347 15.9603 9.2263 16.1959 9.64444C16.2475 9.68326 16.2958 9.72198 16.3368 9.75975C18.465 11.7207 17.3499 14.4941 17.2668 14.6918C18.9957 13.2676 20.1017 11.1612 19.7687 8.98694C18.7072 6.34116 16.9073 5.27428 15.4375 2.95132C15.3632 2.83385 15.2888 2.71608 15.2163 2.59194C15.1794 2.52854 15.1449 2.46375 15.113 2.39772C15.0519 2.27983 15.0048 2.15521 14.9726 2.02639C14.9728 2.0203 14.9708 2.01433 14.9668 2.00968C14.9629 2.00502 14.9573 2.00201 14.9513 2.00124C14.9455 1.99959 14.9394 1.99959 14.9337 2.00124C14.9323 2.00171 14.9304 2.00323 14.929 2.00378C14.9269 2.0046 14.9243 2.00647 14.9221 2.00768C14.5592 2.18065 12.4062 5.58948 15.3244 8.50725V8.50725Z',
      'M16.3368 9.75937C16.2958 9.7216 16.2476 9.68289 16.1959 9.64406C16.1768 9.62968 16.158 9.61539 16.1376 9.60109C15.6363 9.24898 14.7387 8.90121 13.874 9.0516C17.2506 10.7396 16.3441 16.5526 11.6652 16.3331C11.2485 16.3161 10.8368 16.2367 10.4437 16.0976C10.3507 16.0626 10.2588 16.025 10.1679 15.9848C10.115 15.9607 10.062 15.9363 10.0097 15.9092C10.0116 15.9105 10.0142 15.912 10.0161 15.9131C10.6688 16.3585 13.8926 17.4466 17.2616 14.7035L17.2668 14.6913C17.3499 14.4939 18.465 11.7203 16.3368 9.75937V9.75937Z',
      'M7.79836 12.8371C7.79836 12.8371 8.23168 11.2224 10.9012 11.2224C11.1898 11.2224 12.0148 10.4172 12.0301 10.1836C12.0454 9.95013 10.3231 10.9005 8.50536 10.0453C6.54289 9.12196 5.05386 10.1836 5.05386 10.1836C5.05386 10.1836 5.61937 11.5824 7.27785 11.5824C7.10391 13.117 7.91532 14.9067 9.87942 15.8451C9.92333 15.8661 9.96458 15.889 10.0097 15.9091C8.86325 15.3166 7.9166 14.1968 7.79836 12.8371V12.8371Z',
      'M20.6996 8.49811C20.2916 7.51671 19.4653 6.45717 18.8164 6.12229C19.3445 7.15764 19.6502 8.19624 19.767 8.97135C19.767 8.97288 19.7675 8.97667 19.7688 8.98698C18.7073 6.34116 16.9073 5.27428 15.4375 2.95132C15.3633 2.83386 15.2889 2.71608 15.2164 2.59194C15.1795 2.52854 15.145 2.46375 15.113 2.39772C15.0519 2.27983 15.0048 2.15521 14.9727 2.02639C14.9729 2.0203 14.9708 2.01433 14.9669 2.00968C14.9629 2.00502 14.9574 2.00201 14.9513 2.00124C14.9456 1.99959 14.9395 1.99959 14.9337 2.00124C14.9324 2.00171 14.9304 2.00323 14.929 2.00378C14.927 2.0046 14.9243 2.00647 14.9221 2.00768C14.9232 2.00628 14.9254 2.00311 14.9261 2.00237C12.5679 3.38346 11.7679 5.93835 11.6943 7.21659C11.8037 7.20901 11.9128 7.19983 12.0241 7.19983C13.784 7.19983 15.3167 8.16741 16.1374 9.60155C15.6361 9.24944 14.7386 8.90167 13.8738 9.05206C17.2504 10.7401 16.3439 16.5531 11.665 16.3336C11.2484 16.3166 10.8366 16.2372 10.4435 16.098C10.3506 16.0631 10.2586 16.0255 10.1678 15.9853C10.1148 15.9612 10.0619 15.9367 10.0096 15.9097C10.0114 15.911 10.014 15.9124 10.0159 15.9136C9.97006 15.8915 9.92448 15.8688 9.87922 15.8455C9.92312 15.8665 9.96438 15.8894 10.0095 15.9096C8.86297 15.3171 7.91633 14.1973 7.79809 12.8376C7.79809 12.8376 8.23141 11.2229 10.9009 11.2229C11.1895 11.2229 12.0145 10.4176 12.0298 10.1841C12.0263 10.1079 10.3924 9.45795 9.75547 8.83038C9.41512 8.49506 9.25352 8.33339 9.11039 8.2121C9.03274 8.14651 8.95157 8.08522 8.86723 8.0285C8.65325 7.27991 8.64416 6.48759 8.8409 5.73428C7.87652 6.17339 7.12645 6.86749 6.58113 7.48038H6.5768C6.20465 7.00901 6.2309 5.45409 6.25211 5.12944C6.24766 5.10932 5.97449 5.27124 5.93871 5.29565C5.61032 5.53005 5.30331 5.79306 5.02129 6.08159C4.70045 6.40709 4.40731 6.75878 4.14492 7.13299C4.14492 7.13346 4.14465 7.13401 4.14449 7.13448C4.14449 7.13397 4.14477 7.13346 4.14492 7.13299C3.54126 7.98844 3.11313 8.95504 2.88527 9.97694C2.88078 9.99729 2.87699 10.0184 2.87262 10.0389C2.85496 10.1215 2.77551 10.541 2.76441 10.6309C2.76355 10.6378 2.76523 10.624 2.76441 10.6309C2.69196 11.0643 2.64573 11.5017 2.62598 11.9407C2.62598 11.9567 2.625 11.9726 2.625 11.9886C2.625 17.1725 6.82813 21.3749 12.0127 21.3749C16.6558 21.3749 20.5111 18.0043 21.2659 13.5769C21.2818 13.4567 21.2945 13.336 21.3085 13.2148C21.4951 11.605 21.2878 9.91299 20.6996 8.49811ZM19.7684 8.98018C19.7688 8.9835 19.7694 8.98698 19.7699 8.9903L19.7696 8.98928L19.7684 8.98018V8.98018Z',
    ];
    const uuid = classes.id;
    const ids = Array.from({length: paths.length}).map(
      (_, i) => `firefox-${uuid}-${i}`,
    );

    return (
      <SvgIcon {...props} ref={ref}>
        {paths.map((d, i) => (
          <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
        ))}

        <defs>
          <linearGradient
            id={ids[0]}
            x1="18.9844"
            y1="5.00312"
            x2="3.91067"
            y2="19.5439"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.05" stopColor="#FFF44F" />
            <stop offset="0.37" stopColor="#FF980E" />
            <stop offset="0.53" stopColor="#FF3647" />
            <stop offset="0.7" stopColor="#E31587" />
          </linearGradient>
          <radialGradient
            id={ids[1]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15.6169 4.16049) scale(19.2001 19.5234)"
          >
            <stop offset="0.13" stopColor="#FFBD4F" />
            <stop offset="0.28" stopColor="#FF980E" />
            <stop offset="0.47" stopColor="#FF3750" />
            <stop offset="0.78" stopColor="#EB0878" />
            <stop offset="0.86" stopColor="#E50080" />
          </radialGradient>
          <radialGradient
            id={ids[2]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.0496 12.2241) scale(19.6801 19.5234)"
          >
            <stop offset="0.3" stopColor="#960E18" />
            <stop offset="0.35" stopColor="#B11927" stopOpacity="0.74" />
            <stop offset="0.43" stopColor="#DB293D" stopOpacity="0.34" />
            <stop offset="0.5" stopColor="#F5334B" stopOpacity="0.09" />
            <stop offset="0.53" stopColor="#FF3750" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id={ids[3]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.8552 1.08488) scale(6.30195 10.6992)"
          >
            <stop offset="0.13" stopColor="#FFF44F" />
            <stop offset="0.53" stopColor="#FF980E" />
          </radialGradient>
          <radialGradient
            id={ids[4]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(9.69649 17.2631) scale(8.33918 9.13983)"
          >
            <stop offset="0.35" stopColor="#3A8EE6" />
            <stop offset="0.67" stopColor="#9059FF" />
            <stop offset="1" stopColor="#C139E6" />
          </radialGradient>
          <radialGradient
            id={ids[5]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.1214 10.2154) scale(4.4281 5.3925)"
          >
            <stop offset="0.21" stopColor="#9059FF" stopOpacity="0" />
            <stop offset="0.97" stopColor="#6E008B" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient
            id={ids[6]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.3823 3.44015) scale(6.62969 6.65326)"
          >
            <stop offset="0.1" stopColor="#FFE226" />
            <stop offset="0.79" stopColor="#FF7139" />
          </radialGradient>
          <radialGradient
            id={ids[7]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.437 -0.925024) scale(31.6515 26.5697)"
          >
            <stop offset="0.11" stopColor="#FFF44F" />
            <stop offset="0.46" stopColor="#FF980E" />
            <stop offset="0.72" stopColor="#FF3647" />
            <stop offset="0.9" stopColor="#E31587" />
          </radialGradient>
          <radialGradient
            id={ids[8]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(5.68227 7.84995) rotate(77.3946) scale(10.0419 43.4398)"
          >
            <stop stopColor="#FFF44F" />
            <stop offset="0.3" stopColor="#FF980E" />
            <stop offset="0.57" stopColor="#FF3647" />
            <stop offset="0.74" stopColor="#E31587" />
          </radialGradient>
          <radialGradient
            id={ids[9]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.4504 5.83288) scale(18.1726 17.8533)"
          >
            <stop offset="0.14" stopColor="#FFF44F" />
            <stop offset="0.48" stopColor="#FF980E" />
            <stop offset="0.66" stopColor="#FF3647" />
            <stop offset="0.9" stopColor="#E31587" />
          </radialGradient>
          <radialGradient
            id={ids[10]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.1672 6.87693) scale(21.8429 19.541)"
          >
            <stop offset="0.09" stopColor="#FFF44F" />
            <stop offset="0.63" stopColor="#FF980E" />
          </radialGradient>
          <linearGradient
            id={ids[11]}
            x1="17.625"
            y1="4.71249"
            x2="5.57127"
            y2="17.8826"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.17" stopColor="#FFF44F" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#FFF44F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </SvgIcon>
    );
  },
);

export default Firefox;
