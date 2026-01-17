import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seed Frontend Engineering Takehome",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

type RootLayout = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-Light-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-Regular-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-Medium-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-LightItalic-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-RegularItalic-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/SeedSans-MediumItalic-subset.woff2"
          rel="preload"
          type="font/woff2"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      </head>
      <body>{children}</body>
    </html>
  )
}
