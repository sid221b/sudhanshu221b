import Link from 'next/link'
import React from 'react'

const SnippetsCard = () => {
  return (
    <div className='my-4 py-6 px-8 bg-slate-300 dark:bg-slate-800 rounded-2xl'>
      <h1 className='mb-3'>Useful Snippets 🤩</h1>
      <p>
        Some useful code snippets of CSS, tailwind and ReactJS ect to perform
        daily tasks. You can copy and use it as per you need. These have helped
        me in my various tasks. ✌🏻
      </p>
      <Link
        href='/snippets'
        className='text-base text-blue-500 hover:text-blue-300'
      >
        Load Snippets...
      </Link>
    </div>
  )
}

export default SnippetsCard
