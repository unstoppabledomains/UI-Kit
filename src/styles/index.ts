import {createMakeAndWithStyles} from 'tss-react';
import {useTheme} from '@mui/material/styles';

export const {makeStyles, useStyles, withStyles} = createMakeAndWithStyles({
  useTheme,
});

export {
  lightTheme,
  darkTheme,
  MAX_PAGE_CONTENT_WIDTH,
  MAX_ARTICLE_CONTENT_WIDTH,
} from './theme';
