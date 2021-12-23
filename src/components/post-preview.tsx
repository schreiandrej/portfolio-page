import DateFormatter from './date-formatter'
import Link from 'next/link'
import { setIcon } from 'src/components/icons'

type Props = {
  title: string
  date: string
  topics: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, topics, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a className='noFlash active:scale-105 active:opacity-70'>
        <h3 className='mb-3 text-3xl leading-snug text-heading_1'>{title}</h3>
        <p className='mb-4 text-base text-lg leading-relaxed'>{excerpt}</p>
        <div className='flex justify-between'>
          <div className='flex justify-start w-full gap-1'>
            {topics.split(',').map((item) => (
              <div key={item} className='flex flex-row items-start gap-2'>
                <div className='relative w-8 h-8'>{setIcon(item)}</div>
                <div className='flex items-center w-full text-sm font-semibold text-accent'>
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div className='w-full text-sm font-semibold text-right text-accent'>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostPreview
