import React from 'react';
import InputText from '../../../inputComponents/InputText/InputText';
import { setCountry, setTown } from '../../../../store/actionCreators/actionCreateAddCar';
import { selectOption } from '../../../../store/actionCreators/actionCreateAddCar';
import './Geolocation.scss'
import { useSelector } from 'react-redux';

const Geolocation = () => {

    const location = useSelector((state)=>state.newCar.location)

    return (
        <div className='change-block location'>
            <h2>Location</h2>
            <InputText gridName='country' title='country' execute={selectOption} value={location.country}/>
            <InputText gridName='town' title='town' execute={selectOption} value={location.town}/>
        </div>
    );
};

export default Geolocation;