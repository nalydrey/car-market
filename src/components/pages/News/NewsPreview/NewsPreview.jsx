import React from 'react';
import './NewsPreview.scss';
import massage from "../../../../assets/icons/message.png";
import {useNavigate} from "react-router-dom";
import Tag from "../../../UI elements/Tag/Tag";
import axios from "axios";
import {url} from "../../../../App";

const NewsPreview = (props) => {

    const {image, intro, tags, ava, author, comentsCount, id, title,date, addView } = props
    const navigate = useNavigate()




    return (
        <div className='news__block' onClick={()=>{addView(id); navigate(`/news/${id}`)}}>
            <div className='resp-cont'>
                <div className='news__big-foto'>
                    <img src={image} alt=""/>
                </div>
                <div className='date__adittion'>{date}</div>
            </div>
            <div className='news__wrap'>
                <h3>{title}</h3>
                <p>{intro}</p>
                <ul className='tags'>
                    {tags.map((tag)=> <Tag name={tag} key={tag}/>)}
                </ul>
                <div>

                    <div className='news__footer'>
                        <div className='author'>
                            {ava &&
                            <div className="author__foto">
                                <img src={ava} alt=""/>
                            </div>}
                            <p>By {author}</p>
                        </div>
                        <div className='comment__counter'>
                            <div className='comment__sign'>
                                <div><img src={massage} alt=""/></div>
                            </div>
                            <p>{comentsCount} comments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsPreview;