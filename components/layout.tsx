import { Navbar } from './navbar'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
    </>
  )
}
