import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  topics: string
  date: string
}

const PostHeader = ({ title, date, topics }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='max-w-3xl mx-auto'>
        <div className='block mb-6'></div>
        <div className='mb-6 text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
