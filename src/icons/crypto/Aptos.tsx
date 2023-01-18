import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Aptos = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill="#131616" />
      <path
        d="M18.5571 8.03713H16.4357C16.2 8.03713 15.9643 7.93012 15.7929 7.75891L14.9357 6.79586C14.6786 6.51764 14.2714 6.49624 13.9714 6.73165L13.9071 6.79586L13.1786 7.63051C12.9429 7.90872 12.5786 8.05853 12.2143 8.05853H0.621429C0.3 9.00018 0.0857143 10.006 0 11.0119H10.9714C11.1643 11.0119 11.3571 10.9263 11.4857 10.7979L12.5143 9.72782C12.6429 9.59942 12.8143 9.51381 13.0071 9.51381H13.05C13.2429 9.51381 13.4357 9.59942 13.5643 9.74923L14.4214 10.7123C14.5929 10.9049 14.8286 11.0119 15.0643 11.0119H24C23.9143 10.006 23.7 9.00018 23.3786 8.05853H18.5571V8.03713ZM11.5286 13.9439L10.6714 12.9808C10.4143 12.7026 10.0071 12.6812 9.70714 12.9166L9.64286 12.9808L8.89286 13.8155C8.65714 14.0937 8.31429 14.2435 7.95 14.2435H0.171429C0.364286 15.2707 0.707143 16.2766 1.15714 17.2396H6.62143C6.81429 17.2396 6.98571 17.154 7.13571 17.0256L8.16429 15.9556C8.29286 15.8272 8.46429 15.7416 8.65714 15.7416H8.7C8.89286 15.7416 9.08571 15.8272 9.21429 15.977L10.0714 16.94C10.2429 17.1326 10.4786 17.2396 10.7143 17.2396H22.8429C23.2929 16.298 23.6357 15.2921 23.8286 14.2435H12.1714C11.9143 14.2435 11.6786 14.1365 11.5286 13.9439ZM15.7286 4.61294L16.7571 3.54287C16.8857 3.41447 17.0571 3.32886 17.25 3.32886H17.2929C17.4857 3.32886 17.6786 3.41447 17.8071 3.54287L18.6643 4.50593C18.8357 4.69854 19.0714 4.78415 19.3071 4.78415H21.6214C17.5929 -0.523354 10.0286 -1.57201 4.69286 2.43001C3.81429 3.09345 3.02143 3.88529 2.33571 4.78415H15.2143C15.4286 4.82695 15.6 4.74134 15.7286 4.61294ZM7.43571 20.193C7.17857 20.193 6.94286 20.086 6.79286 19.9148L5.93571 18.9517C5.67857 18.6735 5.25 18.6521 4.97143 18.9089L4.92857 18.9517L4.17857 19.7864C3.94286 20.0646 3.6 20.2144 3.23571 20.2144H3.19286C7.71429 25.0511 15.3643 25.2865 20.2286 20.728C20.4214 20.5568 20.5929 20.3642 20.7857 20.1716H7.43571V20.193Z"
        fill="white"
      />
    </SvgIcon>
  );
});

export default Aptos;
