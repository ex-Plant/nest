import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-4xl font-bold">404</h1>
      <p>This page could not be found.</p>
      <Link href="/" className="underline">
        Go home
      </Link>
    </div>
  )
}
