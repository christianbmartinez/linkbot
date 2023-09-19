'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'

import { Button } from './ui/button'

const Hero = () => {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start((i) => ({
      y: [-10, 10],
      x: [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.1,
        repeatType: 'reverse',
        delay: i * 0.5,
      },
    }))
  })

  return (
    <div className='h-full cursor-default px-6 pb-56 lg:pt-48'>
      <div className='container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row'>
        <div className='flex w-full flex-row items-center justify-center p-6 lg:hidden'>
          <motion.img
            alt='Logo'
            src='/robodroid.png'
            className='z-0'
            height={300}
            width={300}
            custom={1}
            animate={controls}
          />
          <motion.img
            alt='Logo'
            src='/robobunny.png'
            className='z-50 mx-[-250px]'
            height={500}
            width={500}
            custom={0}
            animate={controls}
          />
          <motion.img
            alt='Logo'
            src='/robocat.png'
            className='z-0'
            height={300}
            width={300}
            custom={2}
            animate={controls}
          />
        </div>
        <div className='flex w-full items-center justify-center text-center lg:w-4/6 lg:flex-col lg:text-left'>
          <div className='max-w-[600px]'>
            <h1 className='my-4 text-6xl font-bold leading-tight text-zinc-100'>
              Create your <br /> own&nbsp;
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent'>
                chatbot
              </span>
            </h1>
            <p className='mb-8 text-2xl font-thin leading-normal text-zinc-300'>
              Let your audience get to know more about who you are and what you
              do through artificial intelligence.
            </p>
            <Link href='/dashboard'>
              <Button variant='gradient'>Try It Now Free</Button>
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex lg:w-2/6 lg:flex-row lg:items-center lg:justify-around'>
          <motion.img
            alt='Logo'
            src='/robodroid.png'
            height={300}
            width={300}
            custom={1}
            animate={controls}
          />
          <motion.img
            alt='Logo'
            src='/robobunny.png'
            className='mx-[-200px]'
            height={500}
            width={500}
            custom={0}
            animate={controls}
          />
          <motion.img
            alt='Logo'
            src='/robocat.png'
            height={300}
            width={300}
            custom={2}
            animate={controls}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
