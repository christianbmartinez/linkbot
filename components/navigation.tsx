import { motion } from 'framer-motion'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

import MenuItem from './menu-item'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const links = [
  'home',
  'dashboard',
  'my-bot',
  'prompts',
  'analytics',
  'my-account',
  'settings',
]

const Navigation = () => (
  <motion.ul className='menu-ul' variants={variants}>
    <MenuItem href='/' text='Home' />
    <MenuItem href='/dashboard' text='Dashboard' />
    <MenuItem href='/my-bot' text='My Bot' />
    <MenuItem href='/prompts' text='Prompts' />
    <MenuItem href='/analytics' text='Analytics' />
    <MenuItem href='/my-account' text='My Account' />
    <MenuItem href='/settings' text='Settings' />
    <MenuItem href='/logout' text='Logout' />
  </motion.ul>
)

export default Navigation
