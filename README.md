# UI Kit

A set of common Unstoppable Domains components 🧩

## Installation

Install the package in your project directory:

```shell
// with npm
npm install --save @unstoppabledomains/ui-kit

// with yarn
yarn add @unstoppabledomains/ui-kit
```

Note that the UI Kit has peer dependencies on the React and the React DOM. If
you are not already using them in your project, you'd need to install them
(either 17th or 18th versions are required):

```shell
// with npm
npm install react react-dom

// with yarn
yarn add react react-dom
```

You might also need to install identical versions of `@types/react` and
`@types/react-dom` in the same way (in case you're using TypeScript).

## Usage

### Importing MUI components

All [Material UI](https://mui.com/material-ui/getting-started/usage/)
components, hooks, types, icons, lab, and colors can be re-exported from the UI
Kit by using these imports, respectively:

```typescript
import {Typography, useMediaQuery} from '@unstoppabledomains/ui-kit';
import type {Theme} from '@unstoppabledomains/ui-kit';
import {Edit} from '@unstoppabledomains/ui-kit/icons';
import {LoadingButton} from '@unstoppabledomains/ui-kit/lab';
import {indigo as indigoColor} from '@unstoppabledomains/ui-kit/colors';
```

The supported MUI imports mapping is as follows:

```json
{
  "@mui/material": "unstoppabledomains/ui-kit",
  "@mui/lab": "@unstoppabledomains/ui-kit/lab",
  "@mui/icons-material": "@unstoppabledomains/ui-kit/icons",
  "@mui/material/colors": "@unstoppabledomains/ui-kit/colors"
}
```

Default MUI imports (e.g.
`import Select from '@unstoppabledomains/ui-kit/Select`) are not supported.

`@unstoppabledomains/ui-kit/styles` path contains light and dark themes used on
the [Unstoppable Domains website](https://unstoppabledomains.com/), as well as
some constants specific to UD, and helper functions for creating styles with the
help of `tss-react` library:

```typescript
import {
  makeStyles,
  useStyles,
  withStyles,
} from '@unstoppabledomains/ui-kit/styles'; // all supported import names at this path
import {
  lightTheme,
  darkTheme,
  MAX_PAGE_CONTENT_WIDTH,
  MAX_ARTICLE_CONTENT_WIDTH,
} from '@unstoppabledomains/ui-kit/styles/theme'; // all supported import names at this path
```

For example, to render a MUI component with the Unstoppable Domains website
theme applied, use the `ThemeProvider` with the UI Kit `lightTheme` or
`darkTheme` applied:

```typescript
import React from 'react';
import {ThemeProvider, Button} from '@unstoppabledomains/ui-kit/components';
import theme from '@unstoppabledomains/ui-kit/styles/theme'; // lightTheme is exported as default

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained>Hello World</Button>
    </ThemeProvider>
  );
}
```

### Importing UD components

Common components used at
[Unstoppable Domains website](https://unstoppabledomains.com/) will be provided
at the root import path soon.

Once a UD component whose name collides with a MUI component name becomes
available for importing at `@unstoppabledomains/ui-kit` path, the MUI component
becomes overwritten with the styled version used at UD.

For example, considering `Alert` component has been implemented at UI Kit, and
`Link` has not:

```typescript
import {
  Alert, // UD version is ready and MUI version is not available anymore
  Link, // UD version is not ready yet so MUI version is imported instead
} from '@unstoppabledomains/ui-kit';
```

## Development and contributing

### Local development environment

Make sure you have the LTS version of Node and Yarn v1.22 installed on your
local machine. Then clone this repo and run `yarn install` from the project root
to install the dependencies.

### Creating a distribution package

Once your changes in `src` are ready, run `yarn dist` from the root to create a
`dist` folder that contains all the entities built from `src`.

Files important specifically for the NPM package (`package.json`, `README.md`,
`LICENSE`, and `CHANGELOG.md`) are copied over to `dist` with this script.

The script will also build `*.d.ts.` types (put under `dist` alongside the
`*.js` files) and storybook static files.

### Publishing to `npm` registry

1. Make sure to document the changes in the `CHANGELOG.md` file:

```markdown
## 1.2.3

- Added styled Alert component
- Updated readme
```

2. Update the `package.json` file with the new version number:

```json
"version": "1.2.3"
```

3. Create a pull request to the UI Kit with the desired changes and wait for it
   to be merged.

4. Create a distribution package folder and publish the package to `npm` from it
   (also, make sure you're a member of
   [@unstoppabledomains organization](https://www.npmjs.com/~unstoppabledomains)
   and your publishing access token is added to `~/.npmrc`):

```shell
yarn dist && cd dist && npm publish
```

> **_NOTE:_** It is important to publish from `dist` so as not to break the API,
> which supports importing paths without the `dist` part, e.g.
> `@unstoppabledomains/ui-kit/components` instead of
> `@unstoppabledomains/ui-kit/dist/components`.

### Storybook

Storybook is installed and configured to visualize the Unstoppable Domains
website components.

To run Storybook:

```shell
yarn storybook
```

This command will open up http://localhost:6006/ in your browser with the
introductory page.

To create standalone HTML files for the Storybook documentation:

```shell
yarn build:storybook
```

There are no available stories currently.

### Linting and code formatting

```shell
yarn eslint:check # checks for linting errors
yarn eslint:fix # automatically fixes linting errors
yarn prettier:check # checks for formatting errors
yarn prettier:fix # automatically fixes formatting errors
```

All the files marked as "staged" via `git add` are automatically fixed and
re-formatted with ESLint and Prettier before you commit.
