/** @type import('@storybook/builder-vite').StorybookViteConfig */
module.exports = {
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};