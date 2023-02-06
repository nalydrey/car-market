import React, {useState} from 'react';
import './InputNumber.scss'

const InputNumber = (props) => {

    const {min=0, max=9999, dimension='', gridName='', execute, field='countPassanger', value='', title} = props
    console.log(execute)
    const decrrement = (e) => {
        min<value && execute(+value-1)

    }
    const increment = (e) => {
        max>value && execute(+value+1)
    }
    const clientIn = (e) => {
        let val = +e.target.value
        if(val<max && val>min){
        execute(val)
        }
        else{
            val>=max && execute(max)
            val<=min && execute('')
        }

    }
    return (
        <div className='number' style={{gridArea: gridName}}>
            {!dimension&&<button onClick={decrrement}>-</button>}
            <input type="number" step={1} value={value} onChange={clientIn}/>
            {!dimension&&<button onClick={increment}>+</button>}
            {dimension&&<div className='dimension'>{dimension}</div>}
            <span>{title}</span>
        </div>
    );
};

export default InputNumber;