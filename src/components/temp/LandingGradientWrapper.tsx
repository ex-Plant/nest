import React, { ReactNode } from 'react'

export default function LandingGradientWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={`relative isolate min-h-screen w-screen flex`}>{children}</div>
  )
}
