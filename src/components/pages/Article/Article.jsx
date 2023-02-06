import React from 'react'
import './Article.scss'
import Card from '../../card/Card'
import { useSelector } from 'react-redux'
import Button from "../../UI elements/Button";


const Article = () => {
  const car = useSelector(state => state.cars)


  return (
    <section className='article'>
        <div className='container article__container'>

        <Card {...car[0]} />

        {/*<Button/>*/}





        </div>
    </section>
  )
}

export default Article