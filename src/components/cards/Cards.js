
import {useEffect, useState} from "react"
import Card from "../Templates/card/Card"
import Pagination from "../pagination/Pagination"
import './Cards.scss'
import {logDOM} from "@testing-library/react";
import {useLocation} from "react-router-dom";



const Cards = (props) => {


const {pathname} = useLocation()

const {  styleClass, showBy, sortKey, cars, deleteCar, deleteFromHist }  = props

const [currentPage, setPage] = useState(1)
sortKey&&cars.sort((a,b)=>a[sortKey] > b[sortKey] ? 1 : -1)

const showCars = (page) => {
    let first = page*showBy - showBy
    let end = page*showBy
    return cars.slice(first,end)
}

useEffect(()=>{
    setPage(1)
}, [pathname])

 
  return (
    <>
      <div className="cars-box">
          {showCars(currentPage)[0] ?
              showCars(currentPage).map((el, i)=>{
                  return <Card {...el} countPassanger={el['count passenger']} key={i} class={styleClass} deleteFromHist={deleteFromHist} deleteCard={deleteCar}/>})
              :
              <p>Loading...</p>
          }
      </div>
          <Pagination callPage={(page)=>{setPage(page)}} showBy={showBy} currentPage={currentPage} totalCards={cars.length}  />
    </>
  )
}

export default Cards