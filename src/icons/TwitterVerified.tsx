import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import React from 'react';

type Props = {
  className?: string | undefined;
};

const TwitterVerified = ({className}: Props) => (
  <VerifiedRoundedIcon sx={{color: '#28A9FF'}} className={className} />
);

export default TwitterVerified;
