import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '~components/post-body'
import PostHeader from '~components/post-header'
import { getPostBySlug, getAllPosts } from '~lib/api'
import PostTitle from '~components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '~lib/constants'
import markdownToHtml from '~lib/markdownToHtml'
import PostType from '~types/post'

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
        <>
          <article className='mb-32'>
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
          </article>
        </>
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
