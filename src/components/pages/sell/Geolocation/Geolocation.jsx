import React from 'react';
import InputText from '../InputText/InputText';
import { setCountry, setTown } from '../../../../store/actionCreators/actionCreateAddCar';
import './Geolocation.scss'

const Geolocation = () => {
    return (
        <div className='change-block location'>
            <h2>Location</h2>
            <InputText gridName='country' title='country' execute={setCountry}/>
            <InputText gridName='town' title='town' execute={setTown}/>
        </div>
    );
};

export default Geolocation;