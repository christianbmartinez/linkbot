'use client'

import Link from 'next/link'

import Button from './ui/Button'

export const LandingHero = () => (
  <div className='text-zinc-200 font-bold py-36 text-center space-y-5 h-[70vh]'>
    <div className='text-5xl sm:text-6xl lg:text-7xl space-y-5 font-extrabold'>
      Create your own <br />
      <span className='text-purple-500 hover:text-pink-500 transition duration-150 ease-in-out'>
        chatbot
      </span>
    </div>
    <div className='flex flex-row justify-center items-center text-sm md:text-xl font-light text-gray-400 py-5'>
      <div className='max-w-sm sm:max-w-lg'>
        Let your audience get to know more about who you are and what you do
        through artificial intelligence.
      </div>
    </div>
    <div>
      <Link href='/dashboard'>
        <Button padding='px-4 py-4'>Try It Now Free</Button>
      </Link>
    </div>
    <div className='text-gray-400 text-xs md:text-sm font-normal'>
      No strings attached.
    </div>
  </div>
)

export default LandingHero
