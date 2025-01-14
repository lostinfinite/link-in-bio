import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contents Socials',
  description: 'See our socials!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

