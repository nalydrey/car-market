import React from 'react';
import './Button.scss'

const Button = (props) => {

    const {text='Click Me', onClick, className, activeName} = props

    return (
            <button className={`button ${className} ${activeName===text ? 'active__button' : ''}`} onClick={() => onClick(text)}><span>{text}</span><i></i></button>
    );
};
export default Button;