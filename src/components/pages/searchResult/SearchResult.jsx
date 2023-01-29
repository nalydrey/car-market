import React from 'react'
import { useEffect, useRef, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import Cards from "../../cards/Cards"
import LeftFindPanel from "../../leftFindPanel/LeftFindPanel"
import { ReactComponent as Horisontal} from '../../../icons/button-hor.svg'
import { ReactComponent as Vertical} from '../../../icons/button-vert.svg' 
import FindString from "../../findString/FindString"
// import '../newCars/NewCars.scss'
import filterData from "../../../functions/filterData";
import regExpFilter from "../../../functions/regularExpFilter";
import {useSelector} from "react-redux";
import {changeNewOrUsed} from "../../../store/actionCreators/actionCreate";
import './SearchResult.scss'


const SearchResult = (props) => {

    const { radio=false,filterNovelty='All' } = props

    useEffect(()=>{
        changeNewOrUsed(filterNovelty)
    },[filterNovelty])
    // changeNewOrUsed(filterNovelty)

    // отфильтрованные по новизне автомобили
    const allCars = useSelector((state)=>state.cars)
    const findObj = useSelector(state => state.findObj)
    const filteredCars = findObj.isNew && findObj.isNew.length ? filterData(allCars, {isNew: findObj.isNew }) : allCars
    let filterWorkCars = filterData(filteredCars, findObj)
    const findWord = ""
    // поиск автомобиля по запросу
    filterWorkCars = findWord ? (regExpFilter(filterWorkCars, findWord)) : filterWorkCars
    const workCars = filterWorkCars.length ? filterWorkCars : []

    const[horisontal, setHorisontal] = useState(true)
    
    const[sortBy, setSort] = useState('')
    const lineUp = (param) => {setHorisontal(param)}
    const choseMethodOfSort = (e) => {
        setSort(e.target.value)
    }

  return (
    <section className="searchResult">
    <h1>Search</h1>
    <h2> and other </h2>
    <div className="new__cars-container larger__container">

        <LeftFindPanel radio={radio}/>
        
        <div className="cars__box">             
            <div className="top-panel">
                
                <FindString/>

                <div className='info-wrap'>
                    <h2 className="results">{filteredCars.length} Results</h2>

                    <select className="control__select" name="sort" id="sort" onChange={choseMethodOfSort}>
                        <option value="Sort By" disabled>Sort By</option>
                        <option value="brand">brand</option>
                        <option value="year">year</option>
                        <option value="fuel">fuel</option>
                        <option value="price">price</option>
                        <option value="countPassanger">passanger</option>
                        <option value="location">location</option>
                    </select>

                    <div className="layout">
                        <button className={horisontal?'layout__button--active':''} onClick={()=>lineUp(true)}>
                            <Horisontal/>
                        </button>
                        <button className={horisontal?'':'layout__button--active'} onClick={()=>lineUp(false)}>
                            <Vertical/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="">                            
                <Cards showBy={4} styleClass={horisontal&&'horisontal'} sortKey={sortBy} cars={workCars} />
            </div>
        </div>
    </div>
</section>  
  )
}

export default SearchResult