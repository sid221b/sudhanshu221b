import { skillsData } from '@root/utils/constants'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className='my-4 py-6 '>
      <h1>Skills & Tools</h1>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {skillsData.map(({ id, name, stars, icon }) => (
          <div
            key={id}
            className='p-2 md:p-4 dark:bg-neutral-900 bg-neutral-200 rounded-lg text-center hover:scale-110 duration-300 transition-transform'
          >
            <Image
              src={icon}
              height={100}
              width={100}
              className='mb-2 mx-auto p-2 md:p-0 aspect-square '
              alt={name}
            />
            <p className='mb-0'>{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
