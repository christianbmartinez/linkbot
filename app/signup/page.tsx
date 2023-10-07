import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import UserAuthForm from '@/components/user-auth-form'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full'>
        <div className='container relative grid h-full max-w-md flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
          <div className='relative hidden h-full flex-col p-10 text-zinc-100 dark:border-r lg:flex'>
            <div className='absolute inset-0 bg-slate-900' />
            <div className='relative z-20 mt-auto'>
              <blockquote className='space-y-2'>
                <p className='text-lg text-zinc-400'>
                  &ldquo;Creating a personal chatbot has never been easier. With
                  linkbot, I was able to setup a chatbot in minutes with ease.
                  Now my followers can interact with me through AI.&rdquo;
                </p>
                <footer className='text-sm text-zinc-100'>
                  <strong>Sophia Smith</strong> - Social Media Influencer
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='lg:p-8'>
            <div className='mx-auto flex w-full max-w-md flex-col justify-center space-y-6'>
              <div className='flex flex-col space-y-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight text-zinc-100'>
                  Create an account
                </h1>
                <p className='text-sm text-muted-foreground'>
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm />
              <p className='px-8 text-center text-sm text-muted-foreground'>
                By clicking continue, you agree to our{' '}
                <Link
                  href='/terms'
                  className='underline underline-offset-4 hover:text-primary'
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href='/privacy'
                  className='underline underline-offset-4 hover:text-primary'
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
