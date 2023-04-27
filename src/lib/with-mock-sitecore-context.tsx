import { SitecoreContextReactContext, LayoutServicePageState } from '@sitecore-jss/sitecore-jss-nextjs';
import {
    DecoratorFunction,
    PartialStoryFn as StoryFunction,
    Renderer,
  } from "@storybook/types";

export const mockLayoutData = {
    sitecore: {
        context: {
            pageEditing: false,
            pageState: LayoutServicePageState.Normal,
            Languages: [
                {
                    Name: 'en',
                },
                {
                    Name: 'en-US',
                },
                {
                    Name: 'fr',
                },
                {
                    Name: 'fr-CA',
                },
                {
                    Name: 'es-ES',
                },
                {
                    Name: 'ja-JP',
                },
            ],
        },
        setContext: () => {
            // nothing
        },
        route: null,
    },
};

const withMockSitecoreContext : DecoratorFunction = (StoryFn: StoryFunction<Renderer>) => (
    <SitecoreContextReactContext.Provider value={mockLayoutData.sitecore}>{StoryFn()}</SitecoreContextReactContext.Provider>
);

export default withMockSitecoreContext;