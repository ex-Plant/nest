import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
// import { getServerSideURL } from '@/utilities/getURL'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { AlientzGrotesque, AlientzSerif } from '../../../public/fonts/Alientz'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(AlientzSerif.variable, AlientzGrotesque.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={``}>
        {/*<Providers>*/}
        {/*<AdminBar*/}
        {/*  adminBarProps={{*/}
        {/*    preview: isEnabled,*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<Header />*/}
        {children}
        {/*<Footer />*/}
        {/*</Providers>*/}
      </body>
      <GoogleAnalytics gaId="G-RHDXSS9JQJ" />
    </html>
  )
}

// export const metadata: Metadata = {
//   metadataBase: new URL(getServerSideURL()),
//   openGraph: mergeOpenGraph(),
//   twitter: {
//     card: 'summary_large_image',
//     creator: '@payloadcms',
//   },
// }
