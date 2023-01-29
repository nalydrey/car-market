import{ReactComponent as Arrow} from "../../../assets/icons/arrow_down.svg";

import React, {useState} from 'react';
import './InputSelect.scss'

const InputSelect = (props) => {

    const {list=[], title='Title', searchPanel=false, gridName='', execute, value, from=null, to=null } = props
    const [isOpen, setOpen] = useState(false)
    let fromTo = false
    const activate = () => {
        setOpen(!isOpen)
    }

    if(from && to) {

        for (let i = from; i < to ; i++)
        {
            list.push(i)
        }
    }


    const changeValue = (newVal) => {
        execute(newVal)
        setOpen(!isOpen)
    }

    return (
        <div className='drop' style={{gridArea: gridName}}>
            <div className='label__input'>
                <button className={`select__button ${list.length ? isOpen&&'select__button--activate' : 'disable'}`} onClick={activate}>
                    <p>{value ? value : 'Select Option'}</p>
                    <div className='after'>
                        <Arrow/>
                    </div>
                </button>
                <span>{title}</span>
            </div>
            <div className={`drop__list  ${isOpen&&'drop__list--active'} `}>
                {searchPanel&&<div className='search__string '>
                    <input type="text" placeholder='Search here'/>
                </div>}
                <ul className='drop__list-items'>
                    {list.map((listItem, i)=> {
                        return <li className='drop__list-item' data-value={i} key={i} onClick={()=>{changeValue(listItem)}}>{listItem}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InputSelect;