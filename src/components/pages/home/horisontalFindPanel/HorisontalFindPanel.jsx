import React from 'react'
import RadioButtons from '../../../radioButton/RadioButtons'
import FindString from '../../../findString/FindString'
import FindPanel from '../../../FindPanel/FindPanel'
import RangeSlider from '../../../RangeSlider/RangeSlider'
import { useCommonContext } from '../../../../AppContext/AppContext'
import collectData from '../../../../functions/collectData'
import './HorisontalFindPanel.scss'

const HorisontalFindPanel = () => {

    const { radioChose, radioActiveName, filteredCars, findObj, allCars} = useCommonContext()

    const data = collectData(filteredCars)

    const filterByBrand =findObj.brand ? allCars.filter((car)=>{
        return findObj.brand.some(el => {
          return el === car.brand
        })
    }) : []

    const models = filterByBrand.map((car) => {return car.model} )


  

  return (
    <section className="horisontalFindPanel">
        <RadioButtons labelList={['All', 'New', 'Used']} individualClass='underline' asButton radioCallBack={radioChose} activeName={radioActiveName}/>
        <FindString individualStyle='search'/>
        <FindPanel data={data.brand} isSearch dataKey='brand' individualStyle='brand'>Brand</FindPanel>
        <FindPanel data={models} dataKey='model' individualStyle='model'>Model</FindPanel>
        <FindString individualStyle='location'/>
        <RangeSlider />
        <button className="horisontalFindPanel__button">Search</button> 
    </section>
  )
}

export default HorisontalFindPanel