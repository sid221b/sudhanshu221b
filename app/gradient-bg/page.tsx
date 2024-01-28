import React from 'react'
import styles from './styles.module.css'

function GradientBackground() {
  return (
    <main className='bg-blue-700 h-[100vh]'>
      <div className={styles.gradientBg}>
        <div className={styles.gradient}></div>
      </div>
    </main>
  )
}

export default GradientBackground