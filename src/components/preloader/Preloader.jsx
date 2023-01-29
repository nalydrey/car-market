import React from 'react'
import './Preloader.scss'

const Preloader = () => {
  return (
    <div className='preloader'>
        <div className='ring'></div>
        <span>loading...</span>
    </div>
  )
}

export default Preloader