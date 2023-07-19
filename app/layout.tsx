import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telex Quiz ',
  description: 'Generated by Samuma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
