import React, { useEffect, useRef, useState } from 'react'
import './FindString.scss'
import { useCommonContext } from '../../AppContext/AppContext'


const FindString = (props) => {

    const { button, individualStyle } = props

    const { filteredCars, filterByQuery } = useCommonContext()



    const [queryString, setQuety] = useState('') 

    const input = useRef()
    const form = useRef()


    useEffect(()=>{
        form.current.addEventListener('submit', (e)=>{e.preventDefault(); e.target.reset()})
    },[])

    const searchQuery = () => {
        setQuety(input.current.value) 

    }    
    
    const search = () => {
        filterByQuery(queryString)
        setQuety(input.current.value) 
    }


  return (
    <form className={`find ${individualStyle}__find`} action="" ref={form} onSubmit={search}>
        <input type="text" placeholder="Search" ref={input} onChange={searchQuery}  />
    </form>
  )
}

export default FindString