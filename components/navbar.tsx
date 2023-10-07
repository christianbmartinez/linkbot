import Link from 'next/link'
import Image from 'next/image'

import { Button } from './ui/button'

export const Navbar = () => {
  const loggedIn = false
  return (
    <nav className='absolute z-50 flex w-full items-center justify-between p-6'>
      <Link href='/' className='flex items-center'>
        <div className='relative mr-3 h-8 w-8'>
          <Image alt='Logo' width={30} height={30} src='/logo.png' />
        </div>
        <h1 className='text-2xl font-bold text-zinc-100'>Linkbot</h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        {loggedIn ? (
          <Link href='/logout'>
            <Button variant='gradient'>Logout</Button>
          </Link>
        ) : (
          <Link href='/login'>
            <Button variant='gradient'>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}
