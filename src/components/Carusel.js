import React, { Component } from "react";
import Slider from "react-slick";
import './Carusel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Personal from "./personal/Personal";




const Carusel = (props) => {

        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // autoplay: true,
            centerMode: true,
            className: 'center'
        };
        return (
            <div className='carusel'>
                <h2>Testimonial</h2>
                <Slider {...settings}>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                </Slider>
            </div>
        );

}

export default Carusel