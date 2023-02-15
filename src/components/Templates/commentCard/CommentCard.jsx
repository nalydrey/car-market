import React from 'react';
import noFoto from '../../../assets/icons/avatardefault_92824.png'
import './CommentCard.scss'
import {ReactComponent as Delete} from "../../../assets/icons/delete-133.svg";

const CommentCard = (props) => {

    console.log(props)
    const {userId, id, avatar='', user='', text='', currentUser='', deleteComment, isAdmin=false} = props


    return (
        <div className='comment'>
            <div className='comment__foto'>
                <img src={avatar ? avatar : noFoto} alt="foto"/>
            </div>
            <h4>{user}</h4>
            <p>{text}</p>
            {(currentUser===userId || isAdmin) && <button className='comment__delete' onClick={()=>deleteComment(id)}><Delete/></button>}
        </div>
    );
};

export default CommentCard;