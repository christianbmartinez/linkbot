'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Footer from '@/components/footer'

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linkbot',
  description: 'All of your socials in one place.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <html lang='en'>
      <body className={`${montserrat.className} bg-gradient-to-b from-slate-950 to-slate-900`}>
        {children}
        {pathname === '/dashboard' ? null : <Footer />}
      </body>
    </html>
  )
}

export default RootLayout
