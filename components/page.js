// @flow
import * as React from 'react';
import Head from 'next/head';
import { hydrate } from 'emotion/macro';
import injectGlobalStyles from '../styles';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef, no-underscore-dangle
  hydrate(window.__NEXT_DATA__.ids);
}

type Props = {
  title?: string,
  children?: React.Node,
};

const Page = ({ title, children }: Props) => {
  injectGlobalStyles();

  return (
    <div>
      <Head>
        {title
          ? <title>{title} | Klub Toastmastera Zagreb</title>
          : <title>Klub Toastmastera Zagreb</title>}
      </Head>
      {children}
    </div>
  );
};

Page.defaultProps = {
  title: '',
  children: null,
};

export default Page;
