import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Arbitrum = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path
        fill="#1B4ADD"
        d="M12.027 3.241c.05 0 .096.013.141.037l7.436 4.266a.26.26 0 0 1 .137.237l-.029 8.486a.272.272 0 0 1-.141.237L12.11 20.72a.293.293 0 0 1-.283 0l-7.435-4.265a.26.26 0 0 1-.137-.237l.029-8.486c0-.098.054-.188.141-.237l7.465-4.22a.32.32 0 0 1 .137-.034ZM12.031 2a1.55 1.55 0 0 0-.768.2L3.802 6.418a1.51 1.51 0 0 0-.773 1.311L3 16.214c0 .541.29 1.04.764 1.315l7.436 4.266a1.554 1.554 0 0 0 1.537.004l7.461-4.216c.478-.27.773-.77.773-1.31L21 7.785c0-.54-.29-1.04-.764-1.315L12.8 2.205A1.554 1.554 0 0 0 12.03 2Z"
      />
      <path
        fill="#1B4ADD"
        d="M13.495 7h-1.057c-.081 0-.15.05-.178.13l-3.405 9.74a.097.097 0 0 0 .088.13H10c.08 0 .15-.05.178-.13l3.405-9.74a.097.097 0 0 0-.088-.13Zm-1.852 0h-1.057c-.081 0-.15.05-.178.13l-3.402 9.736a.097.097 0 0 0 .089.13h1.057c.08 0 .15-.05.178-.13L11.73 7.13A.095.095 0 0 0 11.643 7Zm1.372 3.773a.093.093 0 0 0-.178 0l-.548 1.574a.197.197 0 0 0 0 .135l1.533 4.384c.028.075.097.13.177.13h1.057a.097.097 0 0 0 .09-.13l-2.131-6.093Zm3.978 6.093L13.94 8.123a.093.093 0 0 0-.178 0L13.213 9.7a.196.196 0 0 0 0 .135l2.457 7.032c.028.075.097.13.178.13h1.057c.068.005.113-.067.088-.13Z"
      />
    </SvgIcon>
  );
});

export default Arbitrum;
