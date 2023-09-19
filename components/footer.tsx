import { Button } from './ui/button'

const Footer = () => (
  <footer className='flex flex-col items-center bg-slate-950 p-6 text-center'>
    <div className='container pb-6'>
      <p className='flex items-center justify-center'>
        <span className='mr-4 text-zinc-100'>Sign up for free</span>
        <Button variant='gradient'>Sign Up</Button>
      </p>
    </div>
    <div className='mx-auto w-full max-w-screen-xl rounded-full bg-slate-900 p-4 text-gray-500 md:my-6 md:flex md:items-center md:justify-between md:px-6'>
      <span className='text-sm sm:text-center'>
        © 2023 Linkbot™. All Rights Reserved.
      </span>
      <ul className='mt-3 flex flex-wrap items-center justify-center text-sm font-medium sm:mt-0'>
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
  </footer>
)

export default Footer
