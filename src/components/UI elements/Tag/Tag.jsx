import React from 'react';
import './Tag.scss'
import {changeTag} from "../../../store/actionCreators/actionCreatePageElements";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Tag = (props) => {

    const { name } = props
    const activeTags = useSelector(state=> state.pageElements.activeTags)
    const navigate = useNavigate()

    const tagFilter = (e) => {
        e.stopPropagation()
        navigate('/news')
        changeTag(name)
    }

    return (
        <li className={`tag  ${activeTags.includes(name) ? 'tag--active': ''}`}
            onClick={tagFilter}>{name}
        </li>
    );
};
export default Tag;