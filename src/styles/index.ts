import {createMakeAndWithStyles} from 'tss-react';
import {Theme, ClassNameMap, useTheme, keyframes} from '@mui/material/styles';
import {MAX_ARTICLE_CONTENT_WIDTH, MAX_PAGE_CONTENT_WIDTH} from './theme'

const {makeStyles, useStyles, withStyles} = createMakeAndWithStyles({
  useTheme,
});

export {default} from './theme';

export {
  makeStyles,
  useStyles,
  withStyles,
  useTheme,
  MAX_ARTICLE_CONTENT_WIDTH,
  MAX_PAGE_CONTENT_WIDTH,
  Theme,
  ClassNameMap,
  keyframes
};
