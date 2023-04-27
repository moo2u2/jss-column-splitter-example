import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <>
      <Scripts />
      <Head>
        <title>Column Splitter Demo</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>

      <div className="container">{route && <Placeholder name="jss-main" rendering={route} />}</div>
    </>
  );
};

export default Layout;
