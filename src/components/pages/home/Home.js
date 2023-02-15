
import Slider from "../../Slider/Slider";
import headerFotos from "../../../datas/fotos";
import HorisontalFindPanel from "./horisontalFindPanel/HorisontalFindPanel";
import RecomendedCars from "./recomendedCars/RecomendedCars";
import CompareSection from "./sectionCompare/CompareSection";
import Carusel from "../../Carusel";
import Tiker from "../../tiker/Tiker";
import {ReactComponent as CarIcon} from "../../../assets/icons/service/ion_car-sport-outline.svg";
import {ReactComponent as Label} from "../../../assets/icons/service/ic_outline-sell.svg";
import {ReactComponent as ServiceCar} from "../../../assets/icons/service/Vector.svg";
import './Home.scss'
import React from "react";
import ServiceButton from "../../UI elements/ServiceButton/ServiceButton";
import StatisticDescr from "../aboutAs/statisticSection/StatisticDescr";
import dataStatisticDescr from "../../../datas/dataStatisticDescr";
import {useNavigate} from "react-router-dom";






const Home = () => {

    const navigate = useNavigate()
    
      return(
        <>
                <Slider play dots>
                    {headerFotos.map((elem, i)=> {
                        return (
                            <div className='bar__item' key={i} style={{backgroundImage: `url(${elem.foto})`}}>
                                <h1>{elem.h1}</h1>
                                <h2>{elem.h2}</h2>
                            </div>

                        )
                    })}
                </Slider>
            <div className="container home">
                <HorisontalFindPanel/>
                <RecomendedCars/>
                <CompareSection/>
                <StatisticDescr title={dataStatisticDescr.title}
                                text={dataStatisticDescr.descr}
                                photo={dataStatisticDescr.photos[0]}
                                statistic={dataStatisticDescr.statistic}
                />
                <div className='service'>
                    <h2>Our Service</h2>
                    <div className='service-buttons'>
                        <ServiceButton icon={<CarIcon/>} text='By a new car' onClick={()=>{navigate('new_cars')}}/>
                        <ServiceButton icon={<ServiceCar/>} text='Buy an used car' onClick={()=>{navigate('used_cars')}}/>
                        <ServiceButton icon={<Label/>} text='Sell my car' onClick={()=>{navigate('sell')}}/>
                    </div>
                </div>
                <Carusel/>
                <Tiker/>
            </div>
        </>


    )
}

export default Home