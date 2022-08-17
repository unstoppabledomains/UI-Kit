# UI Kit

A set of common Unstoppable Domains components 🧩

## Installing UI Kit

UI Kit can be installed with `yarn`. React and MUI dependencies must be installed as well:

```shell
yarn add @unstoppabledomains/ui-kit @mui/material @mui/styles @mui/lab @mui/icons-material @emotion/react @emotion/styled react react-dom tss-react 
```

## Updating UI Kit

UI Kit can be updated with `yarn`:

```shell
yarn upgrade @unstoppabledomains/ui-kit --latest
```

## Using UI Kit

Create a new project:

```shell
mkdir ui-kit-consumer && cd $_
yarn init -y
```
Install the required dependencies from the section above.

### Importing MUI components

All [Material UI](https://mui.com/material-ui/getting-started/usage/) components with the default props applied can be re-exported from the UI Kit:

```typescript
import React from 'react';
import { Button } from '@unstoppabledomains/ui-kit';

const App = () => {
  return <Button variant="contained>Hello World</Button>;
}
```

To apply Unstoppable Domains website theme, use the `ThemeProvider` with the UI Kit `theme` applied:

```typescript
import React from 'react';
import { ThemeProvider, theme, Button } from '@unstoppabledomains/ui-kit';

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

5. Install dependencies
   ```shell
   yarn install
   ```
   
All the components are exported as named exports from `./src/index.ts`.

### Creating a distribution package

Run `yarn rollup` to create a `dist` which contains all the built components.

### Publishing to `npm`

_to be clarified_

Make sure to document the changes in the `CHANGELOG.md` file:

```markdown
## 1.2.3

- Added styled Alert component
```

Update the `package.json` file with the new version number:

```json
"version": "1.2.3"
```

Create a pull request to the UI Kit with the desired changes and wait for it to be merged. Then publish the package to `npm`:

```shell
yarn publish
```

## Storybook

Storybook is installed and configured to visualize the Unstoppable Domains website components.

To run Storybook:

```shell
yarn storybook
```

This will open up http://localhost:6006/ in your browser with the introductory page.

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
