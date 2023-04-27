import { StorybookConfig } from "@storybook/nextjs";

const path = require("path");

const config : StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: [
    '../public'
  ],
  addons: [ '@storybook/addon-essentials', '@storybook/addon-styling' ]
};

export default config;
