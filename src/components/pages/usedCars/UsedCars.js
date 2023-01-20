
import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cards from "../../cards/Cards"
import LeftFindPanel from "../../leftFindPanel/LeftFindPanel"
import { useCommonContext } from "../../../AppContext/AppContext"
import { ReactComponent as Horisontal} from '../../../icons/button-hor.svg' 
import { ReactComponent as Vertical} from '../../../icons/button-vert.svg' 
import FindString from "../../findString/FindString"
import '../newCars/NewCars.scss'

const UsedCars = () => {
    // console.log(useCommonContext());
    const { filteredCars, workCars, radioChose  } = useCommonContext()

    // console.log('render New Cars');
    const navigate = useNavigate()

    const[horisontal, setHorisontal] = useState(true)
    
    const[sortBy, setSort] = useState('')

    const lineUp = (param) => {setHorisontal(param)}


    const choseMethodOfSort = (e) => {
        setSort(e.target.value)
    }
  

    useEffect(()=>{
        radioChose('Used')
    },[])

    return(
        <section className="new__cars">
            <h1>New Cars</h1>
            <h2> and other </h2>
            <div className="new__cars-container">

                <LeftFindPanel/>
                
                <div className="cars__box">             
                    <div className="top-panel">
                        
                            <FindString/>

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

                    <div className="">                            
                        <Cards showBy={4} styleClass={horisontal&&'horisontal'} sortKey={sortBy} cars={workCars} />
                    </div>

                </div>

            </div>
        </section>    
    )
}

export default UsedCars