import React, { useEffect, useState } from 'react'
import { useCommonContext } from '../../AppContext/AppContext'
import './RangeSlider.scss'

const RangeSlider = () => {

    // console.log('render RangeSlider');
    
    const MAXPRICE = 100000

    const startArr = [0, MAXPRICE]
    
    const {createFindObj, resetFilters, findObj} = useCommonContext()

    let [ from, setFrom ] = useState(findObj.price ? findObj.price[0] : startArr[0])
    let [ to, setTo ] = useState(findObj.price ? findObj.price[1] : startArr[1])

    useEffect(()=>{
        return ()=>{
            setFrom(findObj.price ? findObj.price[0] : startArr[0])
            setTo(findObj.price ? findObj.price[1] : startArr[1])
        }
    }, [resetFilters, findObj.isNew[0]])


    const minLevel = from/MAXPRICE*100
    const maxLevel = 100 - to/MAXPRICE*100
    
    const style = {
        left: minLevel + '%', 
        right: maxLevel + '%'
    }
    
    const min = (e) => {
        setFrom(+e.target.value)
    }
    const max = (e) => {
        setTo(+e.target.value)
    }

    const sendData = () => {
        createFindObj({price: [+from, +to]})
    }

  return (
    <div className='range-slider'>
        <h5>Price Range</h5>
        <p>${from} - ${to}</p>
        <div className="slider">
            <div className="progress" style={style}></div>
        </div>
        <div className="range-input" onMouseUp={sendData}>
            <input type="range" className='range-min' min='0' max={MAXPRICE} value={from} onChange={min}/>
            <input type="range" className='range-max' min='0' max={MAXPRICE} value={to} onChange={max}/>
        </div>
    </div>
  )
}

export default RangeSlider