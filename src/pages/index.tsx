import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutSubtitle, AboutTitle } from 'src/components/hero'

export default function Home() {
  return (
    <motion.section
      id='about-section'
      className='relative flex flex-col items-center justify-center w-full h-screen p-10 text-center opacity-0 bg-base'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
    >
      <AboutTitle />
      <AboutSubtitle />

      <Image
        src='/profileImage.png'
        alt='Profil picture'
        layout='fill'
        objectFit='contain'
        quality={100}
        className='-z-30 opacity-5'
      />
      {/* This div is just marker for the intesection observer to let the path
      arrow disapear on scroll */}
    </motion.section>
  )
}
