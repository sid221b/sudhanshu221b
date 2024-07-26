import { skillsData } from '@root/utils/constants'
import Image from 'next/image'
import React from 'react'
import Star from './elements/Star'
import HalfStar from './elements/HalfStar'

const Skills = () => {
  return (
    <section className='my-4 py-6 '>
      <h1>Skills & Tools</h1>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6'>
        {skillsData.map(({ id, name, stars, icon }) => (
          <div
            key={id}
            className='p-0 md:p-4 dark:bg-neutral-900 bg-neutral-200 rounded-lg text-center hover:scale-110 duration-300 transition-transform group/skill relative'
          >
            <Image
              src={icon}
              height={100}
              width={100}
              className='mb-2 mx-auto p-2 md:p-0 aspect-square group-hover/skill:translate-y-[-6px] md:group-hover/skill:translate-y-[-10px] duration-200 transition-transform'
              alt={name}
            />
            <div className='opacity-0 group-hover/skill:opacity-100 flex mx-auto justify-center gap-1 mt-[-16px] md:mt-[-10px] duration-200 transition-opacity'>
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  if (stars - 0.5 === index) {
                    return (
                      <HalfStar
                        key={index}
                        className='fill-yellow-500 dark:fill-yellow-400 size-2.5 md:size-[14px]'
                      />
                    )
                  }
                  if (index < stars) {
                    return (
                      <Star
                        key={index}
                        className='fill-yellow-500 dark:fill-yellow-400 size-2.5 md:size-[14px]'
                      />
                    )
                  }
                  return (
                    <Star
                      key={index}
                      className='stroke-yellow-500 fill-transparent dark:stroke-yellow-400 size-2.5 md:size-[14px]'
                    />
                  )
                })}
            </div>
            <p className='mb-0 md:group-hover/skill:translate-y-[10px] group-hover/skill:font-semibold duration-300 transition-transform'>
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
