import type { Preview } from "@storybook/nextjs";
import withMockSitecoreContext from "../src/lib/with-mock-sitecore-context";
import "../src/assets/app.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      showPanel: true,
      panelPosition: "bottom",
    },
  },
  decorators: [ withMockSitecoreContext ],
};

export default preview;
