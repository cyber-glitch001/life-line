import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Life Line",
  description: "A clear line to the care and support you need.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
