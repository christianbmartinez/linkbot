import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Footer from '@/components/footer'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linkbot',
  description: 'All of your socials in one place.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body
      className={`${roboto.className} bg-gradient-to-b from-slate-950 to-slate-900`}
    >
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
