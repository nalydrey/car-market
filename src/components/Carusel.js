import React from "react";
import './Carusel.scss'
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
                <div className="personal__box">
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                </div>
            </div>
        );

}

export default Carusel