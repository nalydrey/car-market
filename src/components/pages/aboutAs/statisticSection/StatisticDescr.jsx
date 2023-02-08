import React from 'react';
import './StatisticDescr.scss'

const StatisticDescr = (props) => {

    const {title='', text='', photo, statistic=[]} = props
    return (
        <div className='aboutUs__description container'>
            <div className="description__left">
                {title && <h2>{title}</h2>}
                {text && <p className='aboutUs__text'>{text}</p>}
                <div className='statistic__wrap'>
                    {statistic.map((data)=>{
                        return (
                            <div className='statistic__item'>
                                <p className='statistic__number'>{data.counter}</p>
                                <span className='decor decor-top'></span>
                                <span className='decor decor-bottom'></span>
                                <p>{data.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='aboutUs__foto'>
                <img src={photo} alt="foto"/>
            </div>
        </div>
    );
};

export default StatisticDescr;