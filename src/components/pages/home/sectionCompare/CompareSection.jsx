import React from "react"
import Card from "../../../card/Card";
// import vs from '../../../../assets/icons/Ellipse 6.jpg'
import './CompareSection.scss'
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


const CompareSection = () => {

    const allCars = useSelector(state => state.cars)


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