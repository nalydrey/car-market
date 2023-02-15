import React from 'react';
import './ServiceButton.scss'

const ServiceButton = (props) => {

    const {icon, text, onClick} = props

    return (
        <div className='service-button' onClick={onClick}>
            <div className='service-button__icon'>{icon}</div>
            <span>{text}</span>
            <span className='button__line button__line--top'></span>
            <span className='button__line button__line--right'></span>
            <span className='button__line button__line--bottom'></span>
            <span className='button__line button__line--left'></span>
        </div>
    );
};

export default ServiceButton;