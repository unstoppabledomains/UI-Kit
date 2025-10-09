// TODO: remove rule ban once @mui/material wildcard re-export is removed
/* eslint-disable import/export */

export * from './components';

// eslint-disable-next-line no-restricted-imports
export * from '@mui/material';

// TODO: remove explicit Alert re-exports once @mui/material wildcard re-export is removed
export {Alert, AlertClasses, AlertProps} from './components/Alert';
