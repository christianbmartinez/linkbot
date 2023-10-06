import Link from 'next/link'
import { Pin, Briefcase, School } from 'lucide-react'

import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const CardProfile = () => {
  return (
    <div className='relative mb-6 mt-16 flex w-full flex-col break-words rounded-xl bg-slate-800 shadow-xl'>
      <div className='px-6'>
        <div className='flex flex-row items-center justify-center pt-8'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full px-4 text-center'>
            <div className='flex justify-center py-4 pt-8 lg:pt-4'>
              <div className='mr-4 p-3 text-center'>
                <span className='block text-xl font-bold uppercase tracking-wide text-zinc-100'>
                  22
                </span>
                <span className='text-sm text-zinc-400'>Friends</span>
              </div>
              <div className='mr-4 p-3 text-center'>
                <span className='block text-xl font-bold uppercase tracking-wide text-zinc-100'>
                  10
                </span>
                <span className='text-sm text-zinc-400'>Photos</span>
              </div>
              <div className='p-3 text-center lg:mr-4'>
                <span className='block text-xl font-bold uppercase tracking-wide text-zinc-100'>
                  89
                </span>
                <span className='text-sm text-zinc-400'>Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <h3 className='mb-2 text-xl font-semibold leading-normal text-zinc-100'>
            Christian Martinez
          </h3>
          <div className='my-2 flex flex-row items-center justify-center text-sm font-bold uppercase leading-normal text-zinc-400'>
            <Pin className='mr-2' />
            Salt Lake City, Utah
          </div>
          <div className='mb-2 mt-10 flex flex-row items-center justify-center text-zinc-400'>
            <Briefcase className='mr-2' />
            Full Stack Web Developer
          </div>
          <div className='mb-2 flex flex-row items-center justify-center text-zinc-400'>
            <School className='mr-2' />
            University of Utah
          </div>
        </div>
        <div className='mt-10 border-t border-zinc-400 py-10 text-center'>
          <div className='flex flex-wrap justify-center'>
            <div className='lg:w-12/12 w-full px-2'>
              <p className='mb-6 text-lg leading-relaxed text-zinc-400'>
                Hey there! 🖐 I&apos;m Christian, I build apps for the web! I
                have been coding for around 6 years as a hobby, although
                recently i decided to take action and pursue a tech career. I am
                currently a student at the U of U&apos;s coding bootcamp. Follow
                me on&nbsp;
                <Link
                  href='https://www.twitter.com/_coderchris'
                  target='_blank'
                  className='underline opacity-75'
                >
                  twitter
                </Link>
                &nbsp;to stay up to date on my tech journey!
              </p>
              <Link href='/'>
                <Button variant='default'>Show More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProfile
