# UI Kit

A set of common Unstoppable Domains components 🧩

[![license](https://badgen.net/github/license/unstoppabledomains/ui-kit)](https://github.com/unstoppabledomains/UI-Kit/blob/main/LICENSE)
[![npm](https://badgen.net/npm/v/@unstoppabledomains/ui-kit)](https://www.npmjs.com/package/@unstoppabledomains/ui-kit)
![node](https://badgen.net/npm/node/@unstoppabledomains/ui-kit)

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
  lightTheme,
  darkTheme,
  MAX_PAGE_CONTENT_WIDTH,
  MAX_ARTICLE_CONTENT_WIDTH,
} from '@unstoppabledomains/ui-kit/styles'; // all supported import names at this path
```

For example, to render a MUI component with the Unstoppable Domains website
theme applied, use the `ThemeProvider` with the UI Kit `lightTheme` or
`darkTheme` applied:

```typescript
import React from 'react';
import {ThemeProvider, Button} from '@unstoppabledomains/ui-kit';
import theme from '@unstoppabledomains/ui-kit/styles'; // lightTheme is exported as default

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Hello World</Button>
    </ThemeProvider>
  );
};
```

### Generated color system (`paletteV2` + `theme-tokens.css`)

UI-Kit ships a generated, accessible, **Display-P3-capable** semantic color
system derived from an OKLCH engine. From four tuned inputs (base, accent, tint,
contrast) it produces a full set of `--color-*` custom properties for light and
dark, with an sRGB baseline and an automatic P3 upgrade.

It is delivered as two coupled artifacts, both generated from one recipe so they
can never drift:

- **`@unstoppabledomains/ui-kit/styles/theme-tokens.css`** — the values:
  per-theme sRGB hex plus an `@supports (color: color(display-p3 1 1 1))`
  Display-P3 layer, scoped to `:root[data-color-theme='light'|'dark']`.
- **`paletteV2`** — a typed palette namespace on `lightTheme` / `darkTheme`
  whose every leaf is a `var(--color-*)` reference, plus ergonomic dot-alias
  groups (`surface`, `fg`, `line`, …) re-exported from
  `@unstoppabledomains/ui-kit/color-system`.

```typescript
import {ThemeProvider} from '@unstoppabledomains/ui-kit';
import theme from '@unstoppabledomains/ui-kit/styles';
import {surface, fg} from '@unstoppabledomains/ui-kit/color-system';
// Load the values once, near the top of your app:
import '@unstoppabledomains/ui-kit/styles/theme-tokens.css';

// Read via the theme...
const Card = styled('div')(({theme}) => ({
  background: theme.palette.paletteV2.surface.primary,
  color: theme.palette.paletteV2.fg.primary,
}));

// ...or via the dot-aliases (identical `var(--color-*)` references):
const styles = {background: surface.base, color: fg.secondary};
```

> **Keep the CSS import.** `theme-tokens.css` carries every color value but has
> no JS bindings, so make sure your bundler does not tree-shake it (UI-Kit marks
> `**/*.css` as having side effects to prevent this). Without it, every
> `var(--color-*)` reference resolves to nothing.

Toggle the active theme by setting `data-color-theme="light"` or `"dark"` on the
document root (e.g. `<html>`). Because the palette leaves are theme-agnostic
variable references, the browser resolves them to the correct per-theme value
and upgrades to P3 automatically on capable displays.

The OKLCH engine and its `colorjs.io` dependency are **build/script-only** —
they never ship to runtime. Only the prebuilt CSS and the tiny `var(--color-*)`
references are published.

#### Regenerating the tokens

A designer tunes seeds on the **Color System Generator** Storybook page and
clicks **Copy command**; a coding agent runs it. See
[`AGENTS.md`](https://github.com/unstoppabledomains/UI-Kit/blob/main/AGENTS.md)
for the full regenerate → verify → version-bump → publish flow. In short:

```shell
yarn color-system:tokens --write-config --from-url "<generator url>"  # regenerate both artifacts
yarn color-system:tokens --check    # CI gate: 0 contrast/gamut failures, artifacts in sync
yarn color-system:tokens --out-dir ./review   # export token JSON for design review
```

Never edit `theme-tokens.css` or `paletteV2.generated.ts` by hand — change the
recipe (`src/color-system/websiteGeneratedTheme.config.json`) or pass override
flags and regenerate.

#### Consuming from an app (e.g. ecomm)

A consuming app should: import `theme-tokens.css` once; read colors via
`theme.palette.paletteV2.*` or the dot-aliases; keep its own static brand
families (`integration`, `tld`, `campaign`, `templateBuilder`, `code`) emitted
locally (these are intentionally **not** part of UI-Kit's generated system); and
keep toggling `data-color-theme` for light/dark. Bumping the UI-Kit dependency
picks up any retuned palette.

### Importing UD-specific components

Some components are very different from MUI components, in such cases they will
have unique names not to conflict with MUI convention. Example:
`DomainSearchCard`. As a result such components will be documented with
Storybook with a specific set of props.

There are cases when UD & MUI components have similarities, such as `Modal` or
`Button`. In such cases UD will inherit MUI component props and will extend them
to support UD-specific props. New props will be documented in Storybook, with a
reference to the MUI component documentation.

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
### 1.2.3

- Added styled Alert component
- Updated readme
```

2. Update the `package.json` file with the new version number:

```json
"version": "1.2.3"
```

3. Create a pull request with the version bump and changes, and wait for it to
   be merged. There is **no CI auto-publish**: after merge, a maintainer (or an
   authorized coding agent) publishes the release with
   `yarn dist && npm publish dist`.

> Regenerating the **generated color system** (`paletteV2` / `theme-tokens.css`)
> follows a dedicated agent-driven flow — see
> [`AGENTS.md`](https://github.com/unstoppabledomains/UI-Kit/blob/main/AGENTS.md).
> It can either publish directly (Approach A) or land via the PR flow above.

### Storybook

Storybook is installed and configured to visualize the Unstoppable Domains
website components.

To run Storybook:

```shell
yarn storybook:start
```

This command will open up http://localhost:6006/ in your browser with the
introductory page.

To create standalone HTML files for the Storybook documentation:

```shell
yarn storybook:build
```

Storybook is available at https://unstoppabledomains.github.io/UI-Kit.

### Testing

To run the tests (`src/**/*.test.tsx` files):

```shell
yarn test # run all tests
yarn test:watch # run all tests in watch mode
yarn test:coverage # run all tests and generate coverage report
```

### Linting and code formatting

```shell
yarn eslint:check # checks for linting errors
yarn eslint:fix # automatically fixes linting errors
yarn prettier:check # checks for formatting errors
yarn prettier:fix # automatically fixes formatting errors
```

All the files marked as "staged" via `git add` are automatically fixed and
re-formatted with ESLint and Prettier before you commit.
