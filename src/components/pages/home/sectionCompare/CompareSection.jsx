import React from "react"
import Card from "../../../card/Card";
import {useCommonContext} from "../../../../AppContext/AppContext";
// import vs from '../../../../assets/icons/Ellipse 6.jpg'
import './CompareSection.scss'
import { Link } from "react-router-dom";


const CompareSection = () => {

    const {allCars} = useCommonContext()

    return (
        <section className='compare'>
            <h2>Compare Cars</h2>
            <div className='compare__container'>
                <Card {...allCars[7]}/>
                <div className='vs'>
                    vs
                </div>
                <Card {...allCars[3]}/>

            </div>
            <Link to={'compare'} className="compare__button">Compare Cars</Link>
        </section>
    )
}

export default  CompareSection