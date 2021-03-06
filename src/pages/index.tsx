import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutSubtitle, AboutTitle } from 'src/components/hero'

export default function Home() {
  return (
    <motion.section
      className='relative flex flex-col items-center justify-center w-full min-h-screen p-10 text-center bg-base'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
    >
      <AboutTitle />
      <AboutSubtitle />
    </motion.section>
  )
}
