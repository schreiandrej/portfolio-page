import Stories from 'src/components/stories'
import { getAllPosts } from 'src/lib/api'
import Post from 'src/types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <div className='flex flex-col items-center w-full bg-base'>
      <div className='w-2/3 py-20'>
        {allPosts.length > 0 && <Stories posts={allPosts} />}
      </div>
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'topics', 'excerpt'])

  return {
    props: { allPosts },
  }
}
