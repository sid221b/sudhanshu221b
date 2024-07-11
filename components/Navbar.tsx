'use client'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()
  console.log('🚀 ~ Navbar ~ path:', path)
  const router = useRouter()

  const isHome = path === '/'
  const isNestedPath = path.split('/').length > 2

  const goBack = () => {
    router.back()
  }

  return (
    <nav className='fixed h-16 w-full md:w-[720px] lg:w-[1024px] mx-auto px-4 flex items-center justify-end z-50 bg-[#ffffff1a] dark:bg-[#0000001a] backdrop-blur-md'>
      {isNestedPath && (
        <button
          className='mr-auto h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#d7bdbd36]'
          onClick={goBack}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            className='nav-icon'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8'
            />
          </svg>
        </button>
      )}
      {!isHome && (
        <Link
          href={'/'}
          title='Home'
          className={`${
            isNestedPath ? 'mr-4' : 'mr-auto'
          } h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#d7bdbd36]`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            className='nav-icon'
            viewBox='0 0 16 16'
          >
            <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5' />
          </svg>
        </Link>
      )}
      <ThemeToggle />
    </nav>
  )
}

export default Navbar
