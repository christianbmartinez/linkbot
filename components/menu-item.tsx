import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <motion.li
      className='menu-li'
      variants={variants}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className='text-lg font-normal text-zinc-900 hover:text-zinc-950'
        href={href}
      >
        {text}
      </Link>
    </motion.li>
  )
}

export default MenuItem
