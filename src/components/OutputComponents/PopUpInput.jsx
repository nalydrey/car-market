import React, {useEffect, useRef, useState} from 'react';
import './PopUp.scss'
import {showHideInputPopUp} from "../../store/actionCreators/actionCreatePageElements";

const PopUpInput = (props) => {

    const {state, execute, text=''} = props
    const [value, setValue] = useState('')

    const click = (val) => {
        execute(val)
        setValue('')
        showHideInputPopUp(false)
    }

    return (
        <div className={`popup  ${state ? 'popup--show' : ''}`}>
            <div className="input-block">
                <input type="text" value={text} onChange={(e)=>setValue(e.target.value)} value={value}/>
                <div className='popup__button-box'>
                    <button onClick={()=>{click(value)}}>Ok</button>
                    <button onClick={()=>{click('')}}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PopUpInput;