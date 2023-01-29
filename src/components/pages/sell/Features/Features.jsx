import React, {useState} from 'react';
import {useSelector} from "react-redux";
import CheckboxesToggle from "../../../inputComponents/checkBox/CheckboxesToggle";
import './Features.scss'


const Features = () => {

    const features = useSelector((state)=>state.newCar.characteristics.features)

    const [value, setValue] = useState('')

    return (
        <div className='change-block features'>
            <h2>Features</h2>
            <input type="text" placeholder='Search here' onChange={(e)=>{setValue(e.target.value)}}/>
            <div className='features__checkboxes'>
                <CheckboxesToggle obj={features} filterWord={value}/>
            </div>

        </div>
    );
};

export default Features;