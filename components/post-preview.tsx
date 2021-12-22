import DateFormatter from './date-formatter'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  date: string
  topics: { icon: string; description: string }
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, topics, slug }: Props) => {
  return (
    <div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <div className='flex justify-start gap-1 w-full items-center'>
        <div className='relative w-6 h-6'>
          <Image
            src={topics.icon}
            layout='fill'
            objectFit='cover'
            className='rounded-full mr-4'
            alt={topics.description}
          />
        </div>
        <div className='text-xl flex items-center text w-full font-bold'>
          {topics.description}
        </div>
      </div>
    </div>
  )
}

export default PostPreview
