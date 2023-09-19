'use client'

import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linkbot | Dashboard',
  description: 'Manage your bot',
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} bg-gradient-to-b from-slate-950 to-slate-900`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}

export default DashboardLayout
