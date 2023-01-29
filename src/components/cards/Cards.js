
import { useState } from "react"
import Card from "../card/Card"
import Pagination from "../pagination/Pagination"
import './Cards.scss'



const Cards = (props) => {
  
const {  styleClass, showBy, sortKey, cars }  = props 

const [currentPage, setPage] = useState(1)

sortKey&&cars.sort((a,b)=>a[sortKey] > b[sortKey] ? 1 : -1)

const showCars = (page) => {
    let first = page*showBy - showBy
    let end = page*showBy
    return cars.slice(first,end)
}

 
  return (
    <div className="cars-box">
        {showCars(currentPage).map((el)=>{
           return <Card {...el} key={el.id} class={styleClass}/>
        })}
        <Pagination callPage={(page)=>{setPage(page)}} showBy={showBy} currentPage={currentPage} totalCards={cars.length}  />
    </div>
  )
}

export default Cards