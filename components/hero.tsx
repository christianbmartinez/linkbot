'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from './ui/button'

export const Hero = () => {
  return (
    <div className='lg:pt-48 px-6 cursor-default'>
      <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-5, 5],
            rotate: 1,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.2,
              repeatType: 'reverse',
            },
          }}
          className='w-full flex flex-row justify-center items-center lg:hidden p-6'
        >
          <Image alt='Logo' src='/robot.png' height={350} width={350} />
        </motion.div>
        <div className='flex lg:flex-col w-full lg:w-4/6 justify-center items-center text-center lg:text-left'>
          <div className='max-w-[600px]'>
            <h1 className='my-4 text-6xl font-bold leading-tight text-zinc-100'>
              Create your <br /> own&nbsp;
              <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                chatbot
              </span>
            </h1>
            <p className='leading-normal font-thin text-2xl mb-8 text-zinc-300'>
              Let your audience get to know more about who you are and what you
              do through artificial intelligence.
            </p>
            <Link href='/dashboard'>
              <Button variant='gradient'>Try It Now Free</Button>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-5, 5],
            rotate: 1,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.2,
              repeatType: 'reverse',
            },
          }}
          className='w-full hidden lg:block lg:flex-col lg:w-2/6 p-6'
        >
          <Image alt='Logo' src='/robot.png' height={400} width={400} />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
