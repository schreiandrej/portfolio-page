import { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const menuLinks = [
  { link: '/', linkText: 'About', icon: '\u{1F60E}', type: 'internal' },
  { link: '/blog', linkText: 'Blog', icon: '\u{270D}', type: 'internal' },
  {
    link: '/projects',
    linkText: 'Projects',
    icon: '\u{1F680}',
    type: 'internal',
  },
  // { link: '/', linkText: 'Tech Stack', icon: '\u{1F495}', type: 'internal' },
  {
    link: 'https://github.com/schreiandrej',
    linkText: 'Github',
    icon: '\u{1F43C}',
    type: 'external',
  },
]

type NavbarProps = {}

export const Navbar = ({}: NavbarProps): JSX.Element => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`fixed flex flex-wrap items-center justify-between z-20 w-full px-2 py-3 bg-transparent`}
    >
      <Menu as='div' className='relative inline-block text-left '>
        <Menu.Button onClick={() => setNavIsOpen(!navIsOpen)}>
          <svg
            className='w-6 h-6 lg:w-8 lg:h-8 stroke-base'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </Menu.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Menu.Items className='absolute z-10 flex flex-col w-40 gap-2 p-2 text-sm border rounded-lg bg-base border-base lg:60 lg:text-xl '>
            {menuLinks.map((item) => (
              <Menu.Item key={item.linkText}>
                {({ active }) => {
                  return item.type === 'external' ? (
                    <a
                      className={` hover:text-blue-900 hover:font-semibold bg-base z-10 flex justify-end gap-1 flex-row-reverse`}
                      href={item.link}
                    >
                      <p>{item.linkText}</p>
                      <p>{item.icon}</p>
                    </a>
                  ) : (
                    <MyLink href={item.link}>
                      <a
                        className={`${
                          active && 'bg-blue-500'
                        } hover:text-blue-900 hover:font-semibold bg-base z-10 flex justify-end gap-1 flex-row-reverse`}
                      >
                        <p>{item.linkText}</p>
                        <p>{item.icon}</p>
                      </a>
                    </MyLink>
                  )
                }}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>

      <button
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        className={` bg-base flex flex-row-reverse gap-1 justify-between`}
      >
        {theme === 'dark' ? (
          <p>
            {/* <span className='text-sm text-heading_1 hover:font-semibold'>
              light
            </span> */}
            {`\u{2600}`}
          </p>
        ) : (
          <p>
            {/* <span className='text-sm text-heading_1 hover:font-semibold'>
              dark
            </span> */}
            {`\u{1F318}`}
          </p>
        )}
      </button>
    </div>
  )
}

function MyLink(props: any) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
