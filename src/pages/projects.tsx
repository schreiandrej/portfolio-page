import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from 'src/components/projects'
import { GetStaticProps } from 'next'

type ProjetsProps = {
  reposRaw: any[]
}

export interface IRepo {
  name: string
  description: string
  html_url: string
  homepage: string
}

export default function Projects({ reposRaw }: ProjetsProps) {
  const [repos, setRepos] = useState<IRepo[] | null>(null)

  useEffect(() => {
    const sortedRepoData = reposRaw.map((repo: IRepo) => {
      return {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
      }
    })

    setRepos(sortedRepoData)
  }, [])

  return (
    <motion.section
      id='projects-section'
      className='relative flex flex-col items-center w-full h-screen gap-1 py-16 text-center opacity-0 bg-base justify-evenly'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
    >
      {repos &&
        repos.map(
          (repo: IRepo) =>
            repo.name !== 'blog' && (
              <Project
                pictureUrl={`/projectThumnails/${repo.name}.png`}
                githubUrl={repo.html_url}
                homepage={repo.homepage}
                description={repo.description}
                title={repo.name}
                key={repo.name}
              />
            )
        )}
    </motion.section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/schreiandrej/repos')
  const reposRaw: any[] = await res.json()

  return {
    props: {
      reposRaw,
    },
  }
}
