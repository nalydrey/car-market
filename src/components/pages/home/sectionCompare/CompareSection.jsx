import React, {useEffect, useMemo, useState} from "react"
import Card from "../../../Templates/card/Card";
import './CompareSection.scss'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from "../../../UI elements/Button/Button";
import {addDelCompare} from "../../../../store/actionCreators/actionCreate";


const CompareSection = () => {

    const allCars = useSelector(state => state.cars)

    const navigate = useNavigate()

    const [arr, setArr] = useState([])
    useMemo(()=>{
        const newArr = []
        let a = Math.floor(Math.random()*allCars.length)
        let b = Math.floor(Math.random()*allCars.length)
        newArr.push(a)
        b = a === b ? Math.floor(Math.random()*allCars.length) : b
        newArr.push(b)
        setArr(newArr)
    },[])

    const newArr = () => {
        const newArr = []
        let a = Math.floor(Math.random()*allCars.length)
        let b = Math.floor(Math.random()*allCars.length)
        newArr.push(a)
        b = a === b ? Math.floor(Math.random()*allCars.length) : b
        newArr.push(b)
        return newArr
    }

    const compare = () => {
        console.log(arr)
        console.log(allCars)
        allCars.filter(car => car.compared).map(car=>car.id).forEach(el=>addDelCompare(el))
        const cars = allCars.filter((_,index) => (arr[0]=== index  || arr[1]=== index )).map(id=>id.id)
        cars.forEach((el)=>addDelCompare(el))
        navigate('compare')
    }

    return (
        <section className='compare'>
            <h2>Compare Cars</h2>
            <div className='compare__container'>
                <Card {...allCars[arr[0]]} countPassanger='5'/>
                <div className='vs' onClick={()=> setArr(newArr())}>
                    vs
                </div>
                <Card {...allCars[arr[1]]} countPassanger='5'/>

            </div>
            <Button className="compare__button" text={'Compare Cars'} onClick={compare}/>
        </section>
    )
}

export default  CompareSection