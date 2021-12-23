import { useState, useEffect } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import { motion } from 'framer-motion'

export const AboutSubtitle = () => {
  const [learningDays, setLearningDasy] = useState<number>()

  useEffect(() => {
    const startDay = new Date('2020-07-24')
    const today = new Date()
    const daySince = differenceInCalendarDays(today, startDay)
    setLearningDasy(daySince)
  }, [])
  return (
    <motion.h2
      className='max-w-xl px-5 mx-auto text-2xl rounded-xl'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
    >
      <div className='mb-4 text-4xl'>
        Hi<span className='text-6xl'>{`\u{1F44B}`}</span>!
      </div>
      <div className='uppercase'>
        my Name is Andrej. I am a self-tought developer, learning web
        development for {learningDays && learningDays - 200} days now.
      </div>
    </motion.h2>
  )
}

type TitleProps = {}

export const AboutTitle = ({}: TitleProps) => {
  const [wordColor, setWordColor] = useState<{ color: string }>({
    color: 'rgb(0,0,0)',
  })
  const [changeColor, setChangeColor] = useState<boolean>(false)
  return (
    <motion.h1
      className='z-10 mb-20 text-4xl uppercase '
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
    >
      {/* prettier-ignore */}
      <div className='font-bold text-7xl lg:text-8xl'>Web-Dev</div>
      just for{' '}
      {
        <FunWord
          wordColor={wordColor}
          setWordColor={setWordColor}
          changeColor={changeColor}
          setChangeColor={setChangeColor}
        />
      }
      , yet!
    </motion.h1>
  )
}

const FunWord = ({
  wordColor,
  setWordColor,
  changeColor,
  setChangeColor,
}: any) => {
  const str = 'fun'

  //TODO - fix the color difference between letters

  useEffect(() => {
    const getRandomColor = () => {
      const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max)
      }
      return {
        color: `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(
          256
        )})`,
      }
    }

    setWordColor(getRandomColor())
  }, [changeColor])

  return (
    <>
      {str.split('').map((letter, index) => {
        return (
          <span
            key={letter + index}
            className='text-5xl font-bold cursor-pointer'
            style={wordColor}
            onClick={() => setChangeColor(!changeColor)}
          >
            {letter}
          </span>
        )
      })}
    </>
  )
}
