import { motion } from 'framer-motion'
import Stories from 'src/components/stories'
import { getAllPosts } from 'src/lib/api'
import Post from 'src/types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <motion.section
      className='relative flex flex-col items-center w-full min-h-screen gap-1 py-16 text-center bg-base justify-evenly'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
    >
      <div className='w-2/3 py-20'>
        {allPosts.length > 0 && <Stories posts={allPosts} />}
      </div>
    </motion.section>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'topics', 'excerpt'])

  return {
    props: { allPosts },
  }
}
