import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <motion.section
      className='relative flex flex-col items-center justify-center w-full min-h-screen p-10 text-center bg-base'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
    >
      This page could not be found.
    </motion.section>
  )
}
