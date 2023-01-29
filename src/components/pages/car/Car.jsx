import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Car.scss'
import { url } from '../../../App'
import { useState } from 'react'
import Preloader from '../../preloader/Preloader'
import Panel from './panel/Panel'
import { useSelector } from 'react-redux'

const Car = () => {

  const {id} = useParams()
  const car =  useSelector(state => state.cars).find((car) =>car.id === +id)

  return (
    
    <section className='info'>
      <div className='container info__container'>
      {car?
        <Panel obj={car.characteristics} id={car.id} compared={car.compared} views={car.vievs}/>
       :
        <Preloader/>}
       </div>
    </section>
  )
}

export default Car