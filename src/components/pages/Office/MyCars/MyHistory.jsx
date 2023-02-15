import React, {useEffect, useState} from 'react';
import './MyCars.scss'
import Cards from "../../../cards/Cards";
import axios from "axios";
import {url} from "../../../../App";
import {setHistory} from "../../../../store/actionCreators/actionCreatorCurrentUser";
import car from "../../../../assets/images/car.png";


const MyHistory = (props) => {

    const {carIds=[], userId} = props
    const [cars, setCars] = useState([])

    useEffect(()=>{
        const queryString = carIds.map(id =>`id=${id}`).join('&')
        axios.get(url+`cars?${queryString}`).then(resp => {
            const sortCar = carIds.map(id => resp.data.find(car => id===car.id)).reverse()
            console.log(sortCar)
            setCars(sortCar)
        })

    },[carIds.length])

    const deleteFromHistory = (val) => {
        const newArr = carIds.filter(id => id !== val )
        console.log(newArr, userId)
        setHistory(newArr, userId)


    }

    const refrech = () =>{}
    return (
        carIds.length ?
        <div className='myCars'>
            <Cards showBy={6} cars={cars} deleteFromHist={deleteFromHistory}/>
        </div>
        :
        <div>
            <h2>No Cars</h2>
            <img src={car} alt=""/>
        </div>
    );
};

export default MyHistory;