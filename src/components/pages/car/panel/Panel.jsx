import React from 'react'
import './Panel.scss'
import Rating from '../../../rating/Rating'
import {addDelCompare} from '../../../../store/actionCreators/actionCreate'
import { useSelector } from 'react-redux'




const Panel = (props) => {

    const {obj, id, compared, views} = props
    const car = useSelector((state) => state.cars.find(el=>{return el.id===id}))
    
console.log(obj);
  return (
    <div className='info__panel'>
      {Object.keys(obj).map((el)=>{
        if(el!=='features')
        return(
        <div className='info__mini' key={el}>
          <h3>{el}</h3>
          <ul>
            {Object.keys(obj[el]).map((property)=>{
              return(
                <li key={property}>
                  <p>{property}</p>
                  <p>{obj[el][property]}</p>
                </li>
              )
            })}
          </ul>
        </div>)})
      } 
      <div className='info__rating'>
        {(id || id===0) && <Rating id={id}/>}
          <p>{`(${views} Reviews)`}</p>
      </div>
      <button className={`${car.compared ? 'info__compared' : ''}`} onClick={()=>{addDelCompare(id)}}>{car.compared ? 'Added to compare' : 'Compare Car'}</button>
  </div>
  )
}

export default Panel