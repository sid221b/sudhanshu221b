import Image from 'next/image'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      <div className='flex-1 flex flex-col justify-center'>
        <h2 className='text-2xl mb-2 text-left'>Hi, I am</h2>
        <code className='font-bold text-5xl'>Sudhanshu</code>
      </div>
      <footer>
        <p className='text-xs'>
          Made by{' '}
          <a href='https://www.linkedin.com/in/sudhanshu221b' className='text-blue-400'>Sudhanshu</a> with
          ❤️ in{' '}
          <a href='https://nextjs.org/' className='text-blue-500'>
            next.js
          </a>
        </p>
      </footer>
    </main>
  )
}
