import { miniProjects } from '@root/utils/constants'
import Link from 'next/link'
import React from 'react'
import { MiniProjectRecord } from '@root/utils/types'

const page = () => {
  return (
    <main className='mx-8 lg:mx-24 my-10 lg:my-20'>
      <h1 className='font-semibold md:mb-4'>
        Here&apos;s some short helpful code/guides
      </h1>
      <p>
        These are helpful code snippets and guides that have helped me in my
        development. These might be of some help to you as well.
      </p>
      <section className='md:my-10 flex gap-5 md:gap-8'>
        {miniProjects.map(
          ({ title, route, id, background }: MiniProjectRecord) => {
            return (
              <Link
                href={route}
                className='flex h-36 w-60 p-5 rounded-md hover:scale-105 hover:brightness-150 duration-300 hover:shadow-md text-2xl font-semibold tracking-wide'
                key={id}
                style={{ background }}
              >
                {title}
              </Link>
            )
          }
        )}
      </section>
    </main>
  )
}

export default page
