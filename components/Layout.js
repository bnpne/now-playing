import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Layout = ({ children, meta: pageMeta }) => {
  const router = useRouter()
  const meta = {
    title: 'NOW PLAYING | BN PNE',
    description: 'A lil app that tells you what Ben is listening to on Spotify.',
    cardImage: '/np.png',
    keywords: [
      'spotify',
      'next'
    ],
    ...pageMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta content={meta.description} name="description" />
        <meta content={meta.keywords.join(', ')} name="keywords" />
        <meta
          property="og:url"
          content={`https://np.bnpne.io${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ben Paine" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bnpneio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div className="mx-auto w-full h-screen font-medium text-dark bg-gray ">
        {children}
      </div>
    </div>
  )
}

export default Layout
