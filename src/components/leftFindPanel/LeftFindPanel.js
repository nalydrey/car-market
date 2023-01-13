import {  useMemo, useState, useEffect } from "react"
import FindPanel from "../FindPanel/FindPanel"
import RadioButtons from '../radioButton/RadioButtons'
import './LeftFindPanel.scss'

import cars from "../../datas/cars"
import collectData from "../../functions/collectData"
import { useCommonContext } from "../../AppContext/AppContext"
import RangeSlider from "../RangeSlider/RangeSlider"


const LeftFindPanel = () => {
  // console.log('render LeftFindPanel');

  const { reset, findObj, allCars, filteredCars } = useCommonContext()
  const data = collectData(filteredCars)

  // const folowYear = filteredCars.map((el)=>el.year).reduce((ak, el)=> ak+el)

  
  const filterByBrand =findObj.brand ? allCars.filter((car)=>{
      return findObj.brand.some(el => {
        return el === car.brand
      })
  }) : []

  const models = filterByBrand.map((car) => {return car.model} )
  
  return (
    <div className="filters">
        <h4>Filters</h4>  
        <div className="find">
            <input  type="text" placeholder="Search" />
        </div>
        <div className="filters__radio">
            <h5>Conditions</h5>
            <RadioButtons labelList={['All', 'New', 'Used']} />
            {/* callOutFunction={refresh} */}
        </div>
        <FindPanel data={data.year} dataKey='year' sort sortDescending>Year</FindPanel>
        <FindPanel data={data.brand} isSearch dataKey='brand' >Brand</FindPanel>
        <FindPanel data={models} dataKey='model'>Model</FindPanel>
        <FindPanel data={data.drive} dataKey='drive'>Transmission</FindPanel>
        <FindPanel data={data.countPassanger} dataKey='countPassanger'>Passanger</FindPanel>
        <FindPanel data={data.fuel}  dataKey='fuel' >Fuel</FindPanel>
        <div className="chosePrise">
          <RangeSlider/>
        </div>
        <button className="resetButton" onClick={reset}>Reset Filter</button>
    </div>
  )
}

export default LeftFindPanel