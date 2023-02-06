import React from 'react';
import './Button.scss'

const Button = (props) => {

    const {text='Click Me', onClick, className} = props

    return (
            <button className={`button ${className}`}  onClick={onClick}><span>{text}</span><i></i></button>
    );
};
export default Button;