import{ReactComponent as Arrow} from "../../../assets/icons/arrow_down.svg";
import {setCurrentSelect} from "../../../store/actionCreators/actionCreatePageElements";
import React, {useState} from 'react';
import './InputSelect.scss'


const InputSelect = (props) => {

    const {list=[], title='', searchPanel=false, name=title, gridName=title, execute, value, from=null, to=null, buttonClick } = props
    const [isOpen, setOpen] = useState(false)
    let fromTo = false

    console.log(list)
    const activate = () => {
        setOpen(!isOpen)
        setCurrentSelect(name)
    }

    if(from && to) {

        for (let i = from; i < to ; i++)
        {
            list.push(i)
        }
    }


    const changeValue = (newVal) => {
        execute(name, newVal)
        setOpen(!isOpen)
    }

    const clickButton = () =>{
        buttonClick(true)
        setOpen(false)
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
                <button onClick={clickButton}>Add New</button>
            </div>

        </div>
    );
};

export default InputSelect;