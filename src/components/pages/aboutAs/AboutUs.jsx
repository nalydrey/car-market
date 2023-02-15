import React from 'react';
import fotoDesk from '../../../assets/images/pages_picture/aboutUs.jpg'
import './AboutUs.scss'
import ServiceButton from "../../UI elements/ServiceButton/ServiceButton";
import {ReactComponent as CarIcon} from "../../../assets/icons/service/ion_car-sport-outline.svg";
import {ReactComponent as Label} from "../../../assets/icons/service/ic_outline-sell.svg";
import {ReactComponent as ServiceCar} from "../../../assets/icons/service/Vector.svg";
import StatisticDescr from "./statisticSection/StatisticDescr";
import dataStatisticDescr from "../../../datas/dataStatisticDescr";

import Carusel from "../../Carusel";
import Tiker from "../../tiker/Tiker";
import {useNavigate} from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate()

    return (
        <div className='aboutUs'>
            <div className='container'>
                <div className='aboutUs__intro'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit. Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales.</p>
                    <div className='info-frame'>June, 02 2023</div>
                </div>
                <div className='aboutUs__image'>
                    <img src={fotoDesk} alt=""/>
                </div>
                <div className='service'>
                    <h2>Our Service</h2>
                    <div className='service-buttons'>
                        <ServiceButton icon={<CarIcon/>} text='By a new car' onClick={()=>{navigate('/new_cars')}}/>
                        <ServiceButton icon={<ServiceCar/>} text='Buy an used car' onClick={()=>{navigate('/used_cars')}}/>
                        <ServiceButton icon={<Label/>} text='Sell my car' onClick={()=>{navigate('/sell')}}/>
                    </div>
                </div>
                <StatisticDescr text={dataStatisticDescr.descr}
                                photo={dataStatisticDescr.photos[1]}
                                statistic={dataStatisticDescr.statistic}
                />
                <Carusel/>
                <Tiker/>
            </div>
        </div>
    );
};

export default AboutUs;