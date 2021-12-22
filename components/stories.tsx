import PostPreview from './post-preview'
import Post from '~types/post'

type Props = {
  posts: Post[]
}

const Stories = ({ posts }: Props) => {
  return (
    <section className='flex justify-center'>
      <div className=' lg:w-2/3 grid grid-cols-1 gap-y-20 md:gap-y-32 mb-32 md:mt-20'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            topics={post.topics}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default Stories
