import Link from 'next/link'
import Image from 'next/image'

import { Button } from './ui/button'
import Container from './ui/container'

const Header = () => (
  <header>
    <Container>
      <nav className='p-6 flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <div className='relative h-8 w-8 mr-4'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold text-zinc-100'>Linkbot</h1>
        </Link>
        <div className='flex items-center gap-x-2'>
          <Link href='/'>
            <Button variant='gradient'>Get Started</Button>
          </Link>
        </div>
      </nav>
    </Container>
  </header>
)

export default Header
