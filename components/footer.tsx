import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-slate-900 p-6 text-center'>
      <Link href='/' className='flex items-center'>
        <div className='relative mr-3 h-8 w-8'>
          <Image alt='Logo' width={30} height={30} src='/logo.png' />
        </div>
        <h1 className='text-2xl font-bold text-zinc-100'>Linkbot</h1>
      </Link>
      <div className='my-6 flex w-full items-center justify-center text-gray-500'>
        <ul className='flex flex-wrap items-center justify-center text-sm font-medium sm:mt-0'>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <span className='z-50 text-center text-sm text-gray-500'>
        © 2023 Linkbot™. All Rights Reserved.
      </span>
    </footer>
  )
}
