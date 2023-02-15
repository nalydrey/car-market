import React, {useState} from 'react';
import massage from "../../assets/icons/message.png";
import CommentCard from "../Templates/commentCard/CommentCard";
import TextArea from "../inputComponents/TextArea/TextArea";
import Button from "../UI elements/Button/Button";
import {v4 as uuidV4} from "uuid";
import {useSelector} from "react-redux";
import './Comments.scss'

const Comments = (props) => {

    const currentUser = useSelector(state => state.currentUser)

    const {commentsList, sendComment, newComments} = props
    const [comment, setComment] = useState('')


    const newComment = currentUser && {
        userId: currentUser.id,
        user: `${currentUser.user.firstName} ${currentUser.user.lastName}`,
        avatar: currentUser.avatar,
        text: comment
    }
    console.log(commentsList)
    const deleteComment = (commentId) => {
        console.log(commentId)
        const newList = commentsList.filter(comment => comment.id !== commentId)
        newComments(newList)
    }

    const addNewComment = () => {
        if (comment){
            sendComment({...newComment, id: uuidV4()})
            setComment('')
        }

    }



    return (

        <div className="comment__container">
            <div className='comment__counter'>
                <div className='comment__sign'>
                    <div><img src={massage} alt=""/></div>
                </div>
                <p>{commentsList.length} comments</p>
            </div>

            <div className='comment__list'>
                {commentsList.map((comment) => <CommentCard {...comment}
                                                            currentUser={currentUser && currentUser.id}
                                                            isAdmin={currentUser && currentUser.isAdmin}
                                                            deleteComment = {(id)=>deleteComment(id)}
                                                            key={comment.id}
                />)}
            </div>

            {currentUser &&
            <div className='comment__control'>
                <TextArea title={'comments'}
                          placeholder='Leave a message here'
                          value={comment}
                          execute={(_, val)=>setComment(val)}
                />
                <Button text='Add Comment' onClick={addNewComment}/>
            </div>}
        </div>
    );
};

export default Comments;