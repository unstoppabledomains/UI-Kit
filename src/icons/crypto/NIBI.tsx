import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';
import {makeStyles} from 'styles';

const useStyles = makeStyles()(() => ({id: {}}));

const NIBI = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;

  const ids = Array.from({length: 2}).map((_, i) => `nibi-${uuid}-${i}`);

  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path fill={`url(#${ids[0]})`} d="M24 0H0v24h24V0Z" />
      <path
        fill="#fff"
        d="m12.311 6.156.228-.327-.228-.16-.228.16.228.327ZM8.725 8.66l-.228-.326-.46.321.455.328.233-.323Zm7.172 0h.398v-.207l-.17-.12-.228.327Zm0 5.176-.233.323.631.456v-.779h-.398Zm-.32 1.503.233.324.45-.323-.449-.324-.233.323Zm-7.17-5.176.232-.323-.631-.456v.78h.398Zm3.682 7.68-.224.33.23.157.226-.163-.232-.324ZM8.406 15.34h-.398v.21l.174.12.224-.33Zm3.677-9.51L8.497 8.334l.456.653 3.586-2.504-.456-.654Zm4.042 2.505-3.586-2.505-.456.654 3.586 2.504.456-.653Zm.17 5.502V8.66h-.797v5.176h.797ZM8.492 8.983l7.172 5.176.466-.646-7.172-5.176-.466.646Zm7.32 6.033L8.638 9.84l-.466.646 7.172 5.176.466-.646Zm-3.49 3.151 3.488-2.504-.464-.648-3.49 2.505.465.647Zm-4.14-2.499 3.683 2.505.448-.659-3.683-2.505-.448.66Zm-.174-5.505v5.176h.797v-5.176h-.797Z"
      />
      <defs>
        <linearGradient
          id={ids[0]}
          x1={28.348}
          x2={9.592}
          y1={34.701}
          y2={-10.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEF3CC" />
          <stop offset={0.234} stopColor="#D2BBC4" />
          <stop offset={0.474} stopColor="#B689D3" />
          <stop offset={0.698} stopColor="#9493FF" />
          <stop offset={1} stopColor="#4C1CB2" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});

export default NIBI;
