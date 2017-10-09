// @flow
import * as React from 'react'
import Head from 'next/head'
import { hydrate } from 'emotion/macro'
import styled from 'react-emotion/macro'
import injectGlobalStyles from '../styles'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef, no-underscore-dangle
  hydrate(window.__NEXT_DATA__.ids)
}

const Container = styled.div`
  width: 50rem;
  maxWidth: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
`

type Props = {
  title?: string,
  children?: React.Node,
}

const Page = ({ title, children }: Props) => {
  injectGlobalStyles()

  return (
    <div>
      <Head>
        {title
          ? <title>{title} | Klub Toastmastera Zagreb</title>
          : <title>Klub Toastmastera Zagreb</title>}
      </Head>
      <Container>
        {children}
      </Container>
    </div>
  )
}

Page.defaultProps = {
  title: '',
  children: null,
}

export default Page
