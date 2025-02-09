import React, { ReactNode } from 'react'

export default function LandingGradientWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(16,15,1,1) 0%, rgba(48,46,4,1) 20%, rgba(164,84,14,1) 50%, rgba(228,149,235,1) 100%)',
        fontFamily: 'var(--font-alientz-serif)',
      }}
      className={`min-h-screen w-screen flex`}
    >
      {children}
    </div>
  )
}
