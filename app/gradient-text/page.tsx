import React from 'react'
import styles from './styles.module.css'

function GradientText () {
  return (
    <main className='bg-black min-h-lvh flex justify-center align-middle items-center'>
      <div className='flex'>
        <h1 className='text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-purple-400 to-yellow-300'>
          Gradient Text
        </h1>
      </div>
    </main>
  )
}

export default GradientText
