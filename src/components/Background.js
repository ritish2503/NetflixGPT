import React from 'react'
import { BG_URL } from '../utils/constants'

const Background = () => {
  return (
    <div className='relative z-0'>
        <img className='object-cover' src={BG_URL} alt="Background" />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
    </div>
  )
}

export default Background