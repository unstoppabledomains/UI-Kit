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

## Usage

Create a new project, e.g. with
[create-react-app](https://create-react-app.dev/docs/getting-started):

```shell
npx create-react-app ud-ui-kit-consumer --template typescript
cd ud-ui-kit-consumer
npm install --save @unstoppabledomains/ui-kit
```

You're ready to use UI Kit components in your project.

### Importing MUI components

All [Material UI](https://mui.com/material-ui/getting-started/usage/)
components, hooks, types, icons, lab and colors can be re-exported from the UI
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

The reason why there're separate paths for `@mui/lab`, `@mui/material`, and
`@mui/icons-material` re-exports, and not just an option to import everything
directly from `@unstoppabledomains/ui-kit` root is that they all have duplicate
exports.

A separate path for re-exporting `@mui/material/colors` modules exists for
distinguishing the colors from other re-exports

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

## Development and contributing

Use these commands to set up a local development environment (**macOS Terminal**
or **Linux shell**).

1. Install `nvm`

   ```shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | shell
   ```

2. Install LTS version of `node.js`

   ```shell
   nvm install 16.17.0
   ```

3. Install `yarn`
   ```shell
   npm install -g yarn
   ```
4. Clone the repository

   ```shell
   git clone https://github.com/unstoppabledomains/ui-kit.git
   cd ui-kit
   ```

5. Install the dependencies
   ```shell
   yarn install
   ```

### Creating a distribution package

Run `yarn build` to create a `dist` which contains all the built entities. It
will also build types (put under `dist` alongside the .js files) and storybook
static files.

### Publishing to `npm` registry

Make sure to document the changes in the `CHANGELOG.md` file:

```markdown
## 1.2.3

- Added styled Alert component
```

Update the `package.json` file with the new version number:

```json
"version": "1.2.3"
```

Create a pull request to the UI Kit with the desired changes and wait for it to
be merged. Then publish the package to `npm` (also make sure you're a member of
[@unstoppabledomains organization](https://www.npmjs.com/~unstoppabledomains)
and your publishing access token is added to `~/.npmrc`):

```shell
npm run flat-publish
```

`npm run flat-publish` must be used instead of `npm publish` as it publishes
directly from the `dist` folder with necessary package files copied over. It is
important to publish from `dist` to support importing paths without the `dist`
part, e.g. `@unstoppabledomains/ui-kit/components` instead of
`@unstoppabledomains/ui-kit/dist/components`.

## Storybook

Storybook is installed and configured to visualize the Unstoppable Domains
website components.

To run Storybook:

```shell
yarn storybook
```

This will open up http://localhost:6006/ in your browser with the introductory
page.

To create standalone HTML files for the Storybook documentation:

```shell
yarn build:storybook
```

## Linting and formatting

```shell
yarn eslint:check # checks for linting errors
yarn eslint:fix # automatically fixes linting errors
yarn prettier:check # checks for formatting errors
yarn prettier:fix # automatically fixes formatting errors
```
