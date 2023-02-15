import React, { useState} from 'react';
import './InpString.scss'
import find from '../../../assets/icons/inputIcons/find.svg'
import location from '../../../assets/icons/inputIcons/location.svg'
import showHide from '../../../assets/icons/inputIcons/showHide.svg'

const InpString = (props) => {

    const {type='text',
           name='',
           placeholder='',
           required=false,
           sign='',
           value='',
           alwaysShowTitle =false,
           alwaysShowPlaceholder = false,
           setValue
          } = props

    const [show, setShow] = useState(true)
    const isPassword = type === 'password'
    const [placeholderText, setText] = useState('')
    let styleIcon ={}

    switch (sign){
        case 'find':
            styleIcon={ backgroundImage: `url(${find})`}
            break

        case 'location':
            styleIcon={ backgroundImage: `url(${location})`}
            break
    }

    const showPassword = () => {
        setShow(!show)
    }
    const onFocus = () => {
        !alwaysShowPlaceholder &&
        setText(placeholder)
    }
    const onBlur = () => {
        !alwaysShowPlaceholder &&
        setText('')
    }





    return (
        <label className={`input-string ${sign ? 'signOn':''} ${isPassword ? 'showOn': ''}`} >
            {sign && <span className='input-sign'
                           style={styleIcon}/>}
            <input type={show ? type : 'text'}
                   required = {required}
                   placeholder={alwaysShowPlaceholder ? placeholder : placeholderText}
                   value={value}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   onChange={(e)=>setValue(e.target.value)}
                   className={`${value || placeholderText || alwaysShowTitle ? 'full' : ''}`}
            />
            <span className={`input-title `}>{name}</span>
            {isPassword && <span className={`input-show-high`}
                               style={{backgroundImage: `url(${showHide})`}}
                               onClick={showPassword}
            />}
        </label>
    );
};

export default InpString;