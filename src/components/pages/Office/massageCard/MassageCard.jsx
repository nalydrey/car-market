import React, {useEffect, useState} from 'react'
import {deleteMessage} from "../../../../store/actionCreators/actionCreatePageElements";
import {url} from "../../../../App";
import axios from "axios";
import {ReactComponent as Delete} from "../../../../assets/icons/delete-133.svg";
import './MassageCard.scss'

const MassageCard = (props) => {

    const {OwnerId, index, name, email, phone, comment, subject, carId} = props

    const [preview, setPreview] = useState(null)

    useEffect(()=>{
        axios.get(url+`cars/${carId}`).then(resp=>setPreview(resp.data.image[0]))
    }, [])

  return (
    <div className="massage">
        <div className="massage__panel">
            <div className='massage__foto'>
                <img src={preview} alt=""/>
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