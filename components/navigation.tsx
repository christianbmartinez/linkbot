import { motion } from 'framer-motion'

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
    {links.map((link) => (
      <MenuItem href={link} key={link} />
    ))}
  </motion.ul>
)

export default Navigation
