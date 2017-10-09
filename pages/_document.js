// @flow
import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

type Props = {
  renderPage: () => {
    html: string,
    head: Array<React.Element<any>>,
    errorHtml: string,
  },
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: Props) {
    const page = renderPage()
    const styles: {
      html: string,
      ids: string[],
      css: string,
      rules: {
        cssText: string,
      }[],
    } = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props: {
    __NEXT_DATA__: { ids: ?string[] },
    ids: string[],
  }) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    const { css } = this.props
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="//unpkg.com/semantic-ui@^2.2.12/dist/semantic.min.css" />
          <link rel="stylesheet" href="//unpkg.com/react-day-picker@^6.1.1/lib/style.css" />
          {/* eslint-disable react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {/* eslint-enable react/no-danger */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
