
import { useState } from "react"
import Card from "../card/Card"
import { useCommonContext } from "../../AppContext/AppContext"
import Pagination from "../pagination/Pagination"


const Cards = (props) => {
  
const { styleClass, showBy }  = props 

const { workCars } = useCommonContext()

const [currentPage, setPage] = useState(1)

const showCars = (page) => {
    let first = page*showBy - showBy
    let end = page*showBy
    return workCars.slice(first,end)
}

 
  return (
    <div>
        {showCars(currentPage).map((el)=>{
           return <Card {...el} key={el.id} class={styleClass}/>
        })}
        <Pagination callPage={(page)=>{setPage(page)}} showBy={showBy} currentPage={currentPage} totalCards={workCars.length}  />
    </div>
  )
}

export default Cards