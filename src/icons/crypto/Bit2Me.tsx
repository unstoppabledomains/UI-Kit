import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Bit2Me = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props} ref={iconRef || ref}>
      <path
        d="M373.228 843.942C187.661 775.558 90.302 574.741 151.542 386.525c62.525-192.15 269.764-297.615 461.993-235.09 194.156 63.407 297.695 269.362 235.09 461.993-30.42 93.185-95.192 168.872-182.277 213.178-87.246 44.385-186.53 52.17-279.636 21.75-4.655-1.283-9.15-2.728-13.484-4.414m242.795-658.396c-4.093-1.525-8.106-2.889-12.12-4.253-175.695-57.228-365.356 39.168-422.583 214.943-57.388 176.097 37.162 364.715 214.944 422.424 85.159 27.77 175.936 20.707 255.797-19.906 79.701-40.613 138.935-109.719 166.706-194.958 56.024-172.003-33.068-355.725-202.744-418.25"
        fill="#294d9a"
      />
      <path
        d="M315.038 274.558c-11.478 35.075-48.96 54.177-83.955 42.78-34.995-11.397-54.097-48.96-42.7-83.875 11.397-34.994 48.96-54.097 83.955-42.7 34.914 11.237 54.097 48.8 42.7 83.795m211.974 190.383c8.99-12.761 13.484-25.042 13.484-36.84 0-11.88-3.933-21.752-11.718-29.778-7.866-8.026-17.819-11.959-30.019-11.959-22.393 0-43.663 15.972-63.728 47.837l-63.649-37.724c16.695-25.764 34.915-45.268 54.82-58.511 19.825-13.324 45.027-19.906 75.848-19.906 30.74 0 57.79 9.792 80.985 29.296 23.196 19.584 34.995 46.071 34.995 79.701 0 18.38-4.816 35.878-14.126 52.733-9.31 16.855-26.567 38.285-51.69 64.531l-64.21 66.618h140.62v71.354H377.483v-59.234l104.422-106.99c21.11-21.35 36.118-38.366 45.108-51.128zM654.068 748.83c-2.97-2.969-2.167-6.42 1.766-7.785l133.396-44.947c4.014-1.445 6.02.803 4.816 4.736L748.537 834.23c-1.445 4.013-4.896 4.815-7.866 1.765l-86.603-87.165z"
        fill="#294d9a"
      />
    </SvgIcon>
  );
});

export default Bit2Me;
