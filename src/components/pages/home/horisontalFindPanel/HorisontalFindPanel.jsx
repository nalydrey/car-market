import React from 'react'
import RadioButtons from '../../../inputComponents/radioButton/RadioButtons'
import FindString from '../../../findString/FindString'
import FindPanel from '../../../FindPanel/FindPanel'
import RangeSlider from '../../../inputComponents/RangeSlider/RangeSlider'
import collectData from '../../../../functions/collectData'
import './HorisontalFindPanel.scss'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

const HorisontalFindPanel = () => {


    const allCars = useSelector(state => state.cars)
    const findObj = useSelector(state => state.findObj)



    const data = collectData(allCars)

    const filterByBrand =findObj.brand ? allCars.filter((car)=>{
        return findObj.brand.some(el => {
          return el === car.brand
        })
    }) : []

    const models = filterByBrand.map((car) => {return car.model} )


  

  return (
    <section className="horisontalFindPanel">
        {/*<RadioButtons labelList={['All', 'New', 'Used']} individualClass='underline' asButton radioCallBack={radioChose} activeName={radioActiveName}/>*/}
        <FindString individualStyle='search'/>
        <FindPanel data={data.brand} isSearch dataKey='brand' individualStyle='brand'>Brand</FindPanel>
        <FindPanel data={models} dataKey='model' individualStyle='model'>Model</FindPanel>
        <FindString individualStyle='location'/>
        <RangeSlider />
         <Link className="submit__button" to="search_result">Search</Link>
    </section>
  )
}

export default HorisontalFindPanel