import type { Metadata } from 'next'
import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

import { cn } from '@/utilities/ui'
import { AlientzGrotesque, AlientzSerif } from '../../../public/fonts/Alientz'

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(AlientzSerif.variable, AlientzGrotesque.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-RHDXSS9JQJ" />
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Gniazdo Festiwal',
  description: 'Gniazdo Festiwal — Krzykawka 31.07–02.08',
}
