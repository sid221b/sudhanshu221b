'use client'
import { companiesData } from '@root/utils/constants'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const WorkExperience = () => {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    console.log('Page scroll: ', latest)
  })
  return (
    <section className='my-8'>
      <h1 className='text-center mb-6'>What I&apos;ve been up to</h1>
      <div className='flex'>
        {/* left timeline progress */}
        <div className='w-12 h-[calc(100vh-4rem)] sticky left-0 top-16 py-4 mr-4'>
          {/* animated progress */}
          <motion.div
            style={{
              scaleY: scrollYProgress,
              height: '100%',
              translateX: '1.5rem'
            }}
            className='w-1 bg-purple-600 dark:bg-yellow-400 backdrop-brightness-110 origin-top'
          />
          {/* progress background */}
          <div
            className='absolute top-4 bg-slate-400 dark:bg-slate-100 w-1 opacity-30 left-6'
            style={{ height: 'calc(100% - 2rem)' }}
          />
          {/* company icons */}
          <div className='flex flex-col absolute top-0 h-full justify-between py-2'>
            {companiesData.map(({ id, icon, name }) => (
              <div
                className='h-12 w-12 bg-blue-600 rounded-lg overflow-hidden'
                key={id}
              >
                <Image
                  src={icon}
                  alt={name[0]}
                  height={48}
                  width={48}
                  className='h-12 w-12'
                  title={name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full relative ' ref={ref}>
          {companiesData.map(
            ({ id, name, location, startDate, endDate, skills, isRemote }) => {
              return (
                <div className='h-96 mt-4' key={id}>
                  <div className='mb-0'>
                    <h2 className='inline-block mr-4 mb-0'>{name}</h2>
                    <span className='inline-block text-sm text-gray-600 dark:text-gray-400'>
                      {`${location}`}
                      <i>{isRemote ? ' (Remote)' : ''}</i>
                    </span>
                  </div>
                  <p>
                    <span>{startDate}</span>
                    <span> - </span>
                    <span>{endDate}</span>
                  </p>
                  <div className='mt-8 flex gap-4'>
                    <h5>Tech Used</h5>
                    <div className='flex'>
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
