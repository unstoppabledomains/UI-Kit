# UI-Kit — AI coding-agent guide

> This is the source of truth for AI coding agents in UI-Kit. `AGENTS.md` is a
> symlink to this file, so agents that look for either name land here.

This guide tells an AI coding agent (Claude, Codex, …) how to work in UI-Kit.
Today its focus is the **generated color system**: how to regenerate and publish
the theme without human hand-holding (UI-Kit ships its theme via an agent-driven
publish flow — Approach A, no CI auto-publish).

## When you are invoked

A designer tuned base / accent / tint / contrast on the **Color System
Generator** Storybook page and clicked **Copy command**. They pasted you a
command that looks like:

```
yarn color-system:tokens --write-config --from-url "<generator url>"
```

Your job: run it, verify, version-bump, and ship a new UI-Kit release.

## Prerequisites

UI-Kit pins `engines.node` to **16.x.x**, and `yarn` enforces it. Easiest is to
run everything under Node 16 (`nvm use 16`) — then every command below works as
written.

On a newer Node, use the env var `YARN_IGNORE_ENGINES=true` — **not** the
`--ignore-engines` flag. The flag is not inherited by the nested yarn calls
inside composite scripts (`yarn build` runs `yarn build:cjs && …`; `yarn dist`
runs `yarn build && …`), so those inner calls would still abort on the engine
check. The env var is inherited. So either prefix each command, e.g.
`YARN_IGNORE_ENGINES=true yarn build` / `YARN_IGNORE_ENGINES=true yarn dist`, or
`export YARN_IGNORE_ENGINES=true` once for the session. (The toolchain itself
runs fine on newer Node; CI pins Node 16.)

## The generated color system in one paragraph

One recipe (`src/color-system/websiteGeneratedTheme.config.json`) drives one
generator (`scripts/generateThemeTokens.ts`, exposed as
`yarn color-system:tokens`) that emits **two coupled artifacts** so they can
never drift:

- `src/styles/theme-tokens.css` — the values: per-theme sRGB hex + an
  `@supports` Display-P3 upgrade; light on `:root` (default), dark on
  `[data-theme='dark']`.
- `src/color-system/paletteV2.generated.ts` — the typed accessor: a `paletteV2`
  map whose every leaf is a `var(--color-*)` reference, wired into `lightTheme`
  and `darkTheme`.

The OKLCH engine + `colorjs.io` are **dev/script-only** and are excluded from
the published bundle (see `.babelrc.js`). Runtime ships only the CSS and the
`var(--color-*)` references.

## Steps

1. **Regenerate** from the designer's command (or, if they only changed the
   committed recipe, just `yarn color-system:tokens --write-config`):

   ```
   yarn color-system:tokens --write-config --from-url "<generator url>"
   ```

   This rewrites `websiteGeneratedTheme.config.json`, `theme-tokens.css`, and
   `paletteV2.generated.ts` together.

2. **Verify** — these must all pass:

   ```
   yarn color-system:tokens --check   # 0 contrast/non-text failures, 0 gamut warnings, artifacts in sync
   yarn test                          # engine + wiring unit tests
   yarn tsc                           # type-check
   yarn build                         # produces dist/ incl. dist/styles/theme-tokens.css
   ```

   If `--check` reports contrast/gamut failures, do **not** publish — report the
   failing tokens back to the designer; the seeds need adjusting.

3. **Commit** the three regenerated files (and nothing else):

   ```
   git add src/color-system/websiteGeneratedTheme.config.json \
           src/styles/theme-tokens.css \
           src/color-system/paletteV2.generated.ts
   git commit -m "Regenerate color system tokens"
   ```

4. **Version-bump** — patch for a tuning tweak, minor for new tokens:

   ```
   npm version patch   # or: npm version minor
   ```

   Then reconcile `CHANGELOG.md`: rename the `### Unreleased` heading to the new
   version number (it ships verbatim into `dist`, so it must not publish as
   `Unreleased`).

5. **Ship.** Two supported paths — pick the one your access allows:

   - **Direct publish (Approach A)** — if you hold npm publish rights for
     `@unstoppabledomains`:

     ```
     yarn dist           # build + copy package files + per-module package.json
     npm publish dist    # publishes the contents of dist/ (requires npm auth / 2FA)
     ```

   - **PR for maintainer release** — otherwise, open a pull request with the
     regenerated files + the version bump and let it publish on merge, following
     the standard UI-Kit release flow in `README.md` → _Publishing to npm_.
     (There is no CI auto-publish, so a human or an authorized agent runs the
     publish.)

6. **Hand back** the new version number so the consuming app (ecomm) can bump
   its `@unstoppabledomains/ui-kit` dependency.

## Guardrails

- Never edit `theme-tokens.css` or `paletteV2.generated.ts` by hand — they are
  generated. Change the recipe (or pass override flags) and regenerate.
- `borderContrast` and `surfaceHue` are pinned brand defaults and are not
  exposed as generator inputs; do not surface them.
- Only base / accent / tint / contrast are tunable inputs.
- If `yarn build` or `yarn test` fails, stop and report — do not publish a
  broken release.
