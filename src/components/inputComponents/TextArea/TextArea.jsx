import React, {useState} from 'react'
import './TextArea.scss'

const TextArea = (props) => {

    const {execute,
        title='title',
        placeholder='',
        gridName=title,
        name=title,
        value='',
        required=true,
        alwaysShowTitle=false,
        alwaysShowPlaceholder=false
        } = props

    const [placeholderText, setText] = useState('')


  return (
    <div className='description' style={{gridArea: gridName}}>
      <textarea cols="30"
                rows="7"
                required={required}
                placeholder={alwaysShowPlaceholder ? placeholder: placeholderText }
                onFocus={()=>setText(placeholder)}
                onBlur={()=>setText('')}
                value={value}
                onInput={(e)=>execute(name, e.target.value)}
      />

      <span className={`${value || alwaysShowTitle ? 'fillField': ''}`}>{title}</span>
    </div>
  )
}

export default TextArea