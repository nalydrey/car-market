import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './InfoDiscription.scss'

const InfoDiscription = (props) => {

  const {words=560, discription='', title='discription'} = props

    const showMore = discription.length > words

    const [isOpen, setOpen] = useState(false)


    useEffect(()=>{

    })

  return (
    !!discription.length &&
        <div className="info__discription">
            <h2>{title}</h2>
            <p className={`deploy__info ${(isOpen || !showMore) ? 'deploy__info--active':''}`}>
              {discription}
            </p>
            {showMore && <button className='seeMore__button' onClick={()=>{setOpen(!isOpen)}}>{isOpen ? 'Hide' : 'Read more'}</button>}
        </div>
  )
}

export default InfoDiscription