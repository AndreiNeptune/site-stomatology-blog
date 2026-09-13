import React from 'react'

export const metadata = {
  title: 'Admin Studio',
  icons: {
    icon: "/images/logo-pink.png",
    shortcut: "/images/logo-pink.png",
    apple: "/images/logo-pink.png",
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
