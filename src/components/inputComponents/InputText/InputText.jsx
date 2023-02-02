import React from 'react'
import './InputText.scss'

const InputText = (props) => {

const { title='', execute=title, gridName=title, name=title, value='' } = props

  return (
    <label className='label__input' style={{gridArea: gridName}}>
        <input type="text" onChange={(e)=>execute(name, e.target.value)} value={value}/>
        <span>{title}</span>
    </label>
)
}

export default InputText