'use client'
import { companiesData } from '@root/utils/constants'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const WorkExperience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-0.07 0', '0.95 0.95']
  })

  return (
    <section className='my-8 -mx-6 -mr-4 md:mx-0'>
      <h1 className='text-center mb-6'>What I&apos;ve been up to</h1>
      <div className='flex relative flex-row w-full'>
        {/* left timeline progress */}
        <div className='min-w-36 md:min-w-44 lg:min-w-64 my-4 border-lime-300 relative'>
          {/* animated progress */}
          <motion.div
            style={{
              scaleY: scrollYProgress
            }}
            className='ml-auto mr-8 w-1 bg-purple-600 dark:bg-yellow-400 backdrop-brightness-110 origin-top h-full'
          />
          {/* progress background */}
          <div className='right-8 top-0 bg-slate-400 dark:bg-slate-100 w-1 opacity-30  h-full absolute' />
        </div>
        {/* Content */}
        <div className='flex-1' ref={ref}>
          {companiesData.map(
            ({
              id,
              name,
              location,
              startDate,
              endDate,
              skills,
              isRemote,
              icon,
              achievement,
              position,
              workAndRes
            }) => {
              return (
                <div className='mt-4 mb-2' key={id}>
                  {/* Left Content */}
                  <>
                    {/* icon */}
                    <div className='absolute left-22 md:left-28 lg:left-48 h-10 w-10 md:h-12 md:w-12 bg-blue-600 rounded-lg overflow-hidden translate-x-1'>
                      <Image
                        src={icon}
                        alt={name[0]}
                        height={48}
                        width={48}
                        className='h-10 w-10 md:h-12 md:w-12'
                        title={name}
                      />
                    </div>
                    {/* dates */}
                    <div className='absolute left-2 pt-3 w-24 md:w-32 lg:w-64'>
                      <p className='font-light text-sm md:text-base'>
                        <span>{startDate}</span>
                        <span> - </span>
                        <span>{endDate}</span>
                      </p>
                    </div>
                  </>
                  {/* Right Content */}
                  <>
                    <div className='mb-2'>
                      <h2 className='opacity-90 mb-0'>{position}</h2>
                      <h2 className='inline-block mr-2 mb-0 text-[1.15rem] dark:text-neutral-300 text-gray-700'>
                        {name}
                      </h2>
                      <span className='inline-block text-sm text-gray-600 dark:text-gray-400'>
                        {`${location}`}
                        <i>{isRemote ? ' (Remote)' : ''}</i>
                      </span>
                    </div>
                    <h3 className='underline decoration-emerald-600'>
                      Work and Achievements:
                    </h3>
                    <ul>
                      {achievement && (
                        <li>
                          <p className='inline text-green-700 dark:text-green-400'>
                            {achievement}
                          </p>
                        </li>
                      )}
                      {workAndRes.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className='mt-8 flex gap-2 md:gap-4'>
                      <h5 className='text-sm md:text-base'>Tech Used</h5>
                      <div className='flex flex-wrap'>
                        {skills.map(val => (
                          <span
                            key={val}
                            className='h-6 px-2 border-2 text-sm flex-wrap border-gray-700 rounded-md mr-2 mb-2 flex align-middle justify-center text-gray-900 dark:text-gray-200'
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
