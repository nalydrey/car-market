import React, {useEffect, useState} from 'react'
import {url} from "../../../../App";
import axios from "axios";
import {ReactComponent as Delete} from "../../../../assets/icons/delete-133.svg";
import './MassageCard.scss'
import {deleteMessage} from "../../../../store/actionCreators/actionCreatorCurrentUser";

const MassageCard = (props) => {

    const {OwnerId, image, index, name, email, phone, comment, subject} = props


  return (
    <div className="massage">
        <div className="massage__panel">
            <div className='massage__foto'>
                <img src={image} alt=""/>
            </div>
            <ul className="massage__contacts">
                <li>{name}</li>
                <li>{phone}</li>
                <li>{email}</li>
            </ul>
            <button onClick={() => {deleteMessage(index, OwnerId)}}><Delete/></button>
        </div>
        <div className="massage__text">
            <h4>{subject}</h4>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default MassageCard