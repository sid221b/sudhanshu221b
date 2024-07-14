import React from 'react'

const ComingSoonOverlay = () => {
  return (
    <div className='absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-[#3773787a] dark:bg-[#7877774b] z-10 backdrop-blur-base flex text-center flex-col justify-center'>
      <h3 className='text-3xl font-semibold'>Coming Soon...</h3>
      <p className='text-xl'>Still developing 🧑🏻‍💻</p>
    </div>
  )
}

export default ComingSoonOverlay
