import React, {useEffect, useState} from 'react';
import axios from "axios";
import {url} from "../../../../App";
import {useParams} from "react-router-dom";
import Cards from "../../../cards/Cards";
import './MyCars.scss'
import car from "../../../../assets/images/car.png";
const MyCars = (props) => {
    console.log('render MyCars')
    const { userId } = useParams()
    const [ cars, setCars ] = useState([])

    useEffect(()=>{
        axios.get(url+`cars?userId=${userId}`).then(resp=> setCars(resp.data))
    },[])

    const refresh = () =>{
        axios.get(url+`cars?userId=${userId}`).then(resp=> setCars(resp.data))
    }


    return (
        <div className='myCars'>
            {!!cars.length ?
            <Cards showBy={6} cars={cars} deleteCar={refresh}/>
                :
                <div>
                    <h2>No Auto</h2>
                    <img src={car} alt=""/>
                </div>
            }
        </div>
    );
};

export default MyCars;