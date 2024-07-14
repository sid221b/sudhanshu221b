import { miniProjects } from '@root/utils/constants'
import Link from 'next/link'
import React from 'react'
import { MiniProjectRecord } from '@root/utils/types'

const page = () => {
  return (
    <main className='layout'>
      <h1 className=''>Code Snippets</h1>
      <p>
        Here&apos;s some short and helpful code snippets. These are helpful code
        snippets and guides that have helped me in my development. These might
        be of some help to you as well.
      </p>
      <section className='mt-6 md:my-10 flex gap-4 md:gap-8'>
        {miniProjects.map(
          ({ title, route, id, background }: MiniProjectRecord) => {
            return (
              <Link
                href={route}
                className='flex flex-1 md:flex-0 h-36 md:w-60 p-5 rounded-md hover:scale-105 hover:brightness-150 transition-card-transition duration-300 hover:shadow-xl'
                key={id}
                style={{ background }}
              >
                <h2 className='font-semibold tracking-wide text-neutral-50 dark:text-neutral-200'>
                  {title}
                </h2>
              </Link>
            )
          }
        )}
      </section>
    </main>
  )
}

export default page
