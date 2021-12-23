import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from 'src/components/post-body'
import PostHeader from 'src/components/post-header'
import { getPostBySlug, getAllPosts } from 'src/lib/api'
import PostTitle from 'src/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'src/lib/constants'
import markdownToHtml from 'src/lib/markdownToHtml'
import PostType from 'src/types/post'
import { motion } from 'framer-motion'

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className='w-full'>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <motion.article
          className='relative flex flex-col items-center w-full min-h-screen gap-1 py-16 text-center bg-base justify-evenly'
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        >
          <Head>
            <title>
              {post.title} | Next.js Blog Example with {CMS_NAME}
            </title>
            <meta property='og:image' content={post.ogImage.url} />
          </Head>
          <PostHeader
            title={post.title}
            date={post.date}
            topics={post.topics}
          />
          <PostBody content={post.content} />
        </motion.article>
      )}
    </div>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'topics',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
