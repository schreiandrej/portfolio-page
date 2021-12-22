type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  topics: { icon: string; description: string }
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
