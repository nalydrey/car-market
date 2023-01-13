
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cards from "../cards/Cards"
import Pagination from "../pagination/Pagination"
import './NewCars.scss'
import LeftFindPanel from "../leftFindPanel/LeftFindPanel"

import cars from "../../datas/cars"
import { useCommonContext } from "../../AppContext/AppContext"
import Filter from "../filter/Filter"

const NewCars = () => {
    // console.log(useCommonContext());
    const { filteredCars, workCars } = useCommonContext()

    // console.log('render New Cars');
    const navigate = useNavigate()

    const[horisontal, setHorisontal] = useState(true)
    const[sortBy, setSort] = useState('')
    const[searchBy, setSearch] = useState('') 
    const[number, setNumber] = useState(0) 

    const [showFrom, setFrom] = useState(0);
    const [showTo, setTo] = useState(2);

    const lookFor = (a) => {setNumber(a)}
    const lineUp = (param) => {setHorisontal(param)}
    const choseMethodOfSort = (e) => {setSort(e.target.value)}
    const searchQuery = (e) => {
        e.target.parentElement.addEventListener('submit', (e)=>{e.preventDefault(); e.target.reset()})
        setSearch(e.target.value)
    }    

  
    const search = (e) => {
        console.log(e.target);
    }

    // useEffect(()=>{
    //     sortBy&&navigate(`?sort=${sortBy}`, {relative: 'path'})        
    // },[sortBy, navigate])    
    // useEffect(()=>{
    //     searchBy?navigate(`?search=${searchBy}`, {relative: 'path'}):navigate(`.`, {relative: 'path'})
    // },[searchBy, navigate])

    const sendFromTo = (from, to) => {
        setFrom(from)
        setTo(to)
    }
    
    return(
        <section className="new__cars">
            <h1>New Cars</h1>
            <h2> and other </h2>
            <div className="new__cars-container">

                <LeftFindPanel/>
                
                <div className="cars__box">

                    <form action="">
                        <input type="text" placeholder="Search" onChange={searchQuery} onSubmit={search}/>
                    </form>

                    <div className="control">
                        <h2>Найдено {filteredCars.length} </h2>
                        <select name="sort" id="sort" onChange={choseMethodOfSort}>
                            <option value="brand">brand</option>
                            <option value="year">year</option>
                            <option value="fuel">fuel</option>
                            <option value="price">price</option>
                            <option value="countPassanger">passanger</option>
                            <option value="location">location</option>
                        </select>
                        <div className="layout">
                            <button className={horisontal?'layout__button-active':''} onClick={()=>lineUp(true)}>Horisontal</button>
                            <button className={horisontal?'':'layout__button-active'} onClick={()=>lineUp(false)}>Vertical</button>
                        </div>
                    </div>
                        <div className="">                            
                            <Cards showBy={3} styleClass={true?'horisontal': ''}/>
                        </div>
                     
                   
                </div>

            </div>
        </section>    
    )
}

export default NewCars