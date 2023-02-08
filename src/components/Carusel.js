import React from "react";
import './Carusel.scss'
import Personal from "./personal/Personal";




const Carusel = (props) => {

        return (
            <div className='carusel container'>
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