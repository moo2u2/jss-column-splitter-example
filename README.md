# Sitecore Headless/JSS Column Splitter Example

Back-port of the [XM Cloud sample repo ColumnSplitter](https://github.com/sitecorelabs/xmcloud-foundation-head-dev/blob/main/src/sxastarter/src/components/ColumnSplitter.tsx) (using Next.JS) to Sitecore 10.2. For the full run-through see [the blog post](https://sitecoreandmore.blogspot.com/2023/04/sitecore-jssheadless-columnsplitter-in.html).

Simply clone the repo, run an `npm install` and run storybook or [connected mode](https://doc.sitecore.com/xp/en/developers/hd/201/sitecore-headless-development/start-a-jss-app-in-connected-mode.html) to test it out. 

Supports [Storybook](https://storybook.js.org) for previewing:
![Storybook preview.](https://raw.githubusercontent.com/moo2u2/jss-column-splitter-example/main/public/storybook_preview.png)
```
npm run storybook
```

Follow along the blog post (link above) or use [Sitecore Content Serialization](https://doc.sitecore.com/xp/en/developers/102/developer-tools/log-in-to-a-sitecore-instance-with-sitecore-command-line-interface.html) to create the required items in Sitecore. 

Supports Experience Editor for authors:
![Storybook preview.](https://raw.githubusercontent.com/moo2u2/jss-column-splitter-example/tree/main/public/storybook_preview.png)
```
jss setup
jss start:connected
```