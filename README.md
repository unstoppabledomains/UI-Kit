# UI Kit

A set of common Unstoppable Domains components 🧩

## Installing UI Kit

UI Kit can be installed with either `npm` or `yarn`. React and React DOM must be
installed as well (either 17th or 18th versions are required):

```shell
npm install --save @unstoppabledomains/ui-kit react react-dom
```

```shell
yarn add @unstoppabledomains/ui-kit react react-dom
```

## Updating UI Kit

UI Kit can be updated with either `npm` or `yarn`:

```shell
npm update @unstoppabledomains/ui-kit --save
```

```shell
yarn upgrade @unstoppabledomains/ui-kit --latest
```

## Using UI Kit

Create a new project, e.g. with [create-react-app](https://create-react-app.dev/docs/getting-started):

```shell
npx create-react-app ud-ui-kit-consumer --template typescript
cd ud-ui-kit-consumer
npm install --save @unstoppabledomains/ui-kit
```

You're ready to use UI Kit components in your project.

### Importing MUI components

All [Material UI](https://mui.com/material-ui/getting-started/usage/)
components, hooks, types, icons, and colors with the default props applied can
be re-exported from the UI Kit by using these imports respectively:

```typescript
import {
  Typography,
  useMediaQuery,
} from '@unstoppabledomains/ui-kit/dist/components';
import type {Theme} from '@unstoppabledomains/ui-kit/dist/components';
import {Edit} from '@unstoppabledomains/ui-kit/dist/icons';
import {LoadingButton} from '@unstoppabledomains/ui-kit/dist/lab';
import {indigo as indigoColor} from '@unstoppabledomains/ui-kit/dist/colors';
```

The supported MUI imports mapping is as follows:

```json
{
   "@mui/material": "unstoppabledomains/ui-kit/dist/components",
   "@mui/lab": "@unstoppabledomains/ui-kit/dist/lab",
   "@mui/icons-material": "@unstoppabledomains/ui-kit/dist/icons",
   "@mui/material/colors": "@unstoppabledomains/ui-kit/dist/colors",
}
```

`@unstoppabledomains/ui-kit/dist/styles` path contains light and dark themes used on the
Unstoppable Domains website, as well as some constants specific to UD, and helper functions
for creating styles with the help of `tss-react` library:

```typescript
import {darkTheme, useTheme, MAX_PAGE_CONTENT_WIDTH, MAX_ARTICLE_CONTENT_WIDTH, makeStyles, useStyles, withStyles} from '@unstoppabledomains/ui-kit/dist/styles'; // all supported import names at this path
```

For example, to render a MUI component with the Unstoppable Domains website theme applied, use the `ThemeProvider` with the UI
Kit `lightTheme` or `darkTheme` applied:

```typescript
import React from 'react';
import { ThemeProvider, Button } from '@unstoppabledomains/ui-kit/dist/components';
import { lightTheme } from '@unstoppabledomains/ui-kit/dist/styles';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
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

5. Install dependencies
   ```shell
   yarn install
   ```

### Creating a distribution package

Run `yarn build` to create a `dist` which contains all the built entities.

### Publishing to `npm`

_To be clarified_

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
be merged. Then publish the package to `npm`:

```shell
yarn publish
```

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
yarn build-storybook
```

## Linting and formatting

```shell
yarn eslint:check # checks for linting errors
yarn eslint:fix # automatically fixes linting errors
yarn prettier:check # checks for formatting errors
yarn prettier:fix # automatically fixes formatting errors
```
