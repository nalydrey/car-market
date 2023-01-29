import React from 'react'
import './InputText.scss'

const InputText = (props) => {

const { title='title', execute, gridName } = props

  return (
    <label className='label__input' style={{gridArea: gridName}}>
        <input type="text" onChange={(e)=>execute(e.target.value)}/>
        <span>{title}</span>
    </label>
)
}

export default InputText