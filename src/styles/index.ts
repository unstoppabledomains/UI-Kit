import {createMakeAndWithStyles} from 'tss-react';
import {useTheme} from '@mui/material';

export const {makeStyles, useStyles, withStyles} = createMakeAndWithStyles({
  useTheme,
});
