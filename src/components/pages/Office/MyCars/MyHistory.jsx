import React, {useState} from 'react';
import './MyCars.scss'
import Cards from "../../../cards/Cards";


const MyHystory = () => {

    const [cars, setCars] = useState([])


    const refrech = () =>{}
    return (
        <div className='myCars'>
            <Cards showBy={6} cars={cars} deleteCar={refresh}/>
        </div>
    );
};

export default MyHystory;