import Stories from '~components/stories'
import { getAllPosts } from '~lib/api'
import Head from 'next/head'
import { CMS_NAME } from '~lib/constants'
import Post from '~types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog {CMS_NAME}</title>
      </Head>
      <div className='flex flex-col items-center w-full'>
        <div className='w-2/3 py-20'>
          {allPosts.length > 0 && <Stories posts={allPosts} />}
        </div>
      </div>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'topics', 'excerpt'])

  return {
    props: { allPosts },
  }
}
