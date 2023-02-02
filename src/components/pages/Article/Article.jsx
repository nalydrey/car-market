import React from 'react'
import './Article.scss'
import Card from '../../card/Card'
import { useSelector } from 'react-redux'


const Article = () => {
  const car = useSelector(state => state.cars)


  return (
    <section className='article'>
        <div className='container article__container'>

        <Card {...car[0]} class='horisontal'/>
        </div>
    </section>
  )
}

export default Article