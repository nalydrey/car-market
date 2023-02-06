import React from 'react'
import { useState } from 'react';
import './Features.scss'

const Features = (props) => {

    const { title='features', objFeat } = props
    console.log(objFeat);

    const [isOpen, setOpen] = useState(false)


    const features = Object.entries(objFeat).filter((feature)=>feature[1] )
    console.log(features);
  return (
    !!features.length &&
    <div className='features-list'>
        <h2>{title}</h2>
        <div className={`features-list__box ${isOpen ? 'features-list__box--active' : ''}`}>
            {
                features.map((feature)=>{
                    return <div className='features__item' key={feature[0]}>
                                <span>{feature[0]}</span>
                            </div>
                })
            }
        </div>
        {features.length > 10 && <button className='seeMore__button' onClick={()=>{setOpen(!isOpen)}}>{isOpen ? 'hide' : 'Show more'}</button>}
    </div>
  )
}

export default Features