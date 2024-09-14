import type { Metadata } from "next"
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'React + Tailwinds',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main id="root">{children}</main>
      </body>
    </html>
  )  
}
