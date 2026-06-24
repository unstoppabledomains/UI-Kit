import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import GeneratedColorEngineSandbox from './GeneratedColorEngineSandbox';

/**
 * The OKLCH Color System Generator. Designers tune base / accent / tint /
 * contrast here; the rest of the semantic palette auto-generates. The
 * **Copy command** action emits a `yarn color-system:tokens --write-config
 * --from-url "…"` command that a coding agent runs to regenerate
 * `theme-tokens.css` + `paletteV2.generated.ts` and publish a new UI-Kit
 * version (see AGENTS.md).
 *
 * This story is dev/Storybook-only — it bundles the generation engine and
 * `colorjs.io`, which are excluded from the published npm runtime.
 */
export default {
  title: 'Color System/Generator',
  component: GeneratedColorEngineSandbox,
  parameters: {
    layout: 'fullscreen',
    options: {showPanel: false},
  },
} as ComponentMeta<typeof GeneratedColorEngineSandbox>;

export const Generator: ComponentStory<
  typeof GeneratedColorEngineSandbox
> = () => <GeneratedColorEngineSandbox />;
