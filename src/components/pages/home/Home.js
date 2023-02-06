
import Slider from "../../Slider/Slider";
import headerFotos from "../../../datas/fotos";
import HorisontalFindPanel from "./horisontalFindPanel/HorisontalFindPanel";
import RecomendedCars from "./recomendedCars/RecomendedCars";
import CompareSection from "./sectionCompare/CompareSection";
import Carusel from "../../Carusel";
import Tiker from "../../tiker/Tiker";
import './Home.scss'
import React from "react";






const Home = () => {
    
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
            <div className="container">
                <HorisontalFindPanel/>
                <RecomendedCars/>
                <CompareSection/>
                <Carusel/>
                <Tiker/>
            </div>
        </>


    )
}

export default Home