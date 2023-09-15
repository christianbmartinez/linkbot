import Link from 'next/link'
import Image from 'next/image'

import Button from './ui/Button'

const LandingNavbar = () => (
  <nav className='p-4 bg-slate-900 flex items-center justify-between h-[10vh]'>
    <Link href='/' className='flex items-center'>
      <div className='relative h-8 w-8 mr-4'>
        <Image fill alt='Logo' src='/logo.png' />
      </div>
      <h1 className='text-2xl font-bold text-zinc-200'>Linkbot</h1>
    </Link>
    <div className='flex items-center gap-x-2'>
      <Link href='/'>
        <Button>Get Started</Button>
      </Link>
    </div>
  </nav>
)

export default LandingNavbar
