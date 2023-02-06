import React, {useEffect, useState} from 'react';
import axios from "axios";
import {url} from "../../../../App";
import {useParams} from "react-router-dom";
import Cards from "../../../cards/Cards";
import './MyCars.scss'
const MyCars = (props) => {
    console.log('render MyCars')
    const { userId } = useParams()
    const [ cars, setCars ] = useState([])

    useEffect(()=>{
        axios.get(url+`cars?userId=${userId}`).then(resp=> setCars(resp.data))
    },[])




    return (
        <div className='myCars'>
            <Cards showBy={6} cars={cars} />
        </div>
    );
};

export default MyCars;