import React, {useState} from 'react';
import {addImages, deleteFoto} from "../../../../store/actionCreators/actionCreateAddCar";
import {useSelector} from "react-redux";
import './LoadImage.scss'

const LoadImage = () => {

    const value = useSelector((state)=>state.newCar)


    const loadFiles = (e) => {
        const files = Array.from(e.target.files)

        files.forEach(file => {
            console.log(file)
            const reader = new FileReader()

            reader.onload = (e) => {
                addImages(e.target.result)
            }

            reader.readAsDataURL(file)
        })
    }

    return (
        <div className='change-block '>
            <h2>Images</h2>
            <div className='loadIMG'>
                <label htmlFor="file">+</label>
                <input type="file" id='file' onChange={loadFiles} multiple/>
                <ul className='image-box'>
                    {value.image.map((car,i) => {
                        return <li key={i}><
                            img src={car} alt="foto"/>
                            <button className='delete-foto' onClick={()=>deleteFoto(i)}></button>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    );
};

export default LoadImage;