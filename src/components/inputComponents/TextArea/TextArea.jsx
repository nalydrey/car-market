import React from 'react'
import './TextArea.scss'

const TextArea = (props) => {

    const {execute, title='', placeholder=title, gridName=title, name=title, value='' } = props

  return (
    <div className='description' style={{gridArea: gridName}}>
    <textarea name=""
              id=""
              cols="30"
              rows="7"
              placeholder={placeholder}
              value={value}
              onInput={(e)=>execute(name, e.target.value)}
    />
    <span>{title}</span>
</div>
  )
}

export default TextArea