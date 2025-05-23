import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.plugins?.push(svgr());
    return config;
  },
};

export default config;
