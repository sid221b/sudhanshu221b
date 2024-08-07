import Hero from '@root/components/Hero'
import Skills from '@root/components/Skills'
import SnippetsCard from '@root/components/SnippetsCard'
import WorkExperience from '@root/components/WorkExperience'

export default function Home () {
  return (
    <main className='min-h-screen px-6 pt-16 md:px-24 md:pt-24 flex flex-col'>
      <Hero />
      <Skills />
      <SnippetsCard />
      <WorkExperience />
      <footer className='mt-auto self-center'>
        <p className='text-xs mb-4'>
          Made by{' '}
          <a
            href='https://www.linkedin.com/in/sudhanshu221b'
            className='text-blue-400'
          >
            Sudhanshu
          </a>{' '}
          with ❤️ in{' '}
          <a href='https://nextjs.org/' className='text-blue-500'>
            next.js
          </a>
        </p>
      </footer>
    </main>
  )
}
