'use client'
import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Dribble',
  description: 'Discover the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
