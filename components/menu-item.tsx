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

const MenuItem = ({ href }: any) => {
  return (
    <motion.div
      className='menu-li'
      variants={variants}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className={`text-lg font-light text-zinc-100 hover:text-zinc-300`}
        href={`/${href === 'home' ? '' : href}`}
      >
        {href.toUpperCase()}
      </Link>
    </motion.div>
  )
}

export default MenuItem
