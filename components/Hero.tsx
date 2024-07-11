import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center md:gap-4 md:justify-between md:py-12'>
      <div className='flex-1 flex flex-col justify-start'>
        <h2 className='text-2xl mb-2'>Hi, I am</h2>
        <h1 className='font-bold text-5xl text-black dark:text-gray-50 tracking-normal md:tracking-wide'>
          Sudhanshu Chaurasia
        </h1>
        <p className='opacity-70'>
          A Frontend web and hybrid mobile app developer...
        </p>
      </div>
      <div className='mb-6 md:mb-0'>
        <Image
          src={'/smiling-face-with-sunglasses.webp'}
          height={250}
          width={250}
          className='w-[200px] h-[200px] md:w-[250px] md:h-[250px]'
          alt='Hero Image'
        />
      </div>
    </section>
  )
}

export default Hero
