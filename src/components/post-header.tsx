import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  topics: { icon: string; description: string }
  date: string
}

const PostHeader = ({ title, date, topics }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='max-w-3xl mx-auto'>
        <div className='block mb-6'>
          <div className='flex items-center'>
            <img
              src={topics.icon}
              className='w-8 h-8 rounded-full mr-4'
              alt={topics.description}
            />
            <div className='text-xl font-bold'>{topics.description}</div>
          </div>
        </div>
        <div className='mb-6 text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
