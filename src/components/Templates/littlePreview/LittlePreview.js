import React from 'react';
import './LittlePreview.scss'
import {useNavigate} from "react-router-dom";
const LittlePreview = (props) => {

    const {author, date, ava, title, image, id, addView} = props
    const navigate = useNavigate()


    return (
        <div className='little-preview' onClick={() =>{addView(id); navigate(`/news/${id}`)}}>
            <div className='little-preview__foto'>
                <img src={image} alt=""/>
            </div>
            <div className='short-discr'>
                <h4>{title}</h4>
                <div>
                    <div className='author'>
                        {ava &&
                            <div className="author__foto">
                                <img src={ava} alt=""/>
                            </div>}
                        <p>By {author} - {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LittlePreview;