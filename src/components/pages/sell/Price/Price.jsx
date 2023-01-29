import './Price.scss'

import React, {useRef} from 'react';
import {useSelector} from "react-redux";
import {changePrice} from "../../../../store/actionCreators/actionCreateAddCar";
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";

const Price = (props) => {

    const {min=0, max=100000} = props
    const value = useSelector((state)=>state.newCar.price)
    const progress = 100*value/max

    return (
        <div className='change-block price'>
            <h2>Price</h2>

            <InputNumber dimension='$'
                         gridName='price'
                         execute={changePrice}
                         title='Full Price'
                         value={value}
                         max={max}
            />
            <div className='one-range'>
                <div className='one-range__progress' style={{width: progress+'%'}}></div>
                <div className='one-range__slider'>
                    <input type="range"  min={min} max={max} onInput={(e)=>{changePrice(e.target.value)}} value={value}/>
                </div>
            </div>
        </div>
    );
};

export default Price;