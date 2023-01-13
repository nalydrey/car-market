
import Slider from "react-slick"
import { Link } from "react-router-dom";
import { useState } from "react";

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import '../home/Home.scss'
import Cards from "../cards/Cards";

const Home = () => {

    const [findNewCar, setFind] = useState(true)

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        className: 'sl',
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        dotsClass: 'dots',
    }

    const choise = (e) => {
        let control = document.querySelector('.recomend__buttons')
        let buttons = control.querySelectorAll('button')
        buttons.forEach((button) => {
            button.classList.remove('control__active')
        })
        e.target.classList.add('control__active')
        setFind(JSON.parse(e.target.dataset.isNewCar))
    }

    return(
        <div className="container">
            <div className="wrap">
                <Slider {...settings}>
                    <img src="./images/sto.jpg" alt="" />
                    <img src="./images/sto.jpg" alt="" />
                    <img src="./images/sto.jpg" alt="" />
                    <img src="./images/sto.jpg" alt="" />            
                </Slider>
            </div>
            <header className="header__container">
                <div className="header__wrap">
                    <h1>Find your dream car</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>    
                </div>
            </header>
            <div className="header__plug"></div>
            <section className='recomend'>
                <h2>Recommended Cars</h2>
                <div className='recomend__control'>
                    <div className='recomend__buttons'>
                        <button className='control__active' data-is-new-car={true} onClick={choise}>New</button>
                        <button data-is-new-car={false} onClick={choise}>Used</button>
                    </div>
                    <Link className='submenu'  to={findNewCar?'new_cars':'used_cars'}>See more</Link>
                </div>
                <div className='cars__container'>
                    {/* <Cards qty={3} isNew={findNewCar}/>         */}
                </div>
            </section>
        </div>


    )
}

export default Home