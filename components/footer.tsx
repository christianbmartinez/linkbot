import Button from './ui/Button'

export const Footer = () => (
  <footer className='flex flex-col items-center text-center text-white bg-slate-900 h-[10vh]'>
    <div className='container p-6'>
      <p className='flex items-center justify-center'>
        <span className='mr-4 text-zinc-200'>Sign up for free</span>
        <Button>Sign Up</Button>
      </p>
    </div>
    <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between md:my-6 md:px-6 bg-slate-800'>
      <span className='text-sm text-gray-500 sm:text-center'>
        © 2023 Linkbot™. All Rights Reserved.
      </span>
      <ul className='flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0'>
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
