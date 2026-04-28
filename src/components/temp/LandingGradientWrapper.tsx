import React, { ReactNode } from 'react'

export default function LandingGradientWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={`relative isolate min-h-dvh w-screen flex`}>{children}</div>
  )
}
