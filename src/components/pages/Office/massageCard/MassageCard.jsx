import React from 'react'
import './MassageCard.scss'

const MassageCard = (props) => {

    const {deleteMessage, index, name, email, phone, comment, subject} = props
  
  console.log(deleteMessage);


  return (
    <div className="massage">
            <div className="massage__panel">
              <ul className="massage__contacts">
                <li>{name}</li>
                <li>{phone}</li>
                <li>{email}</li>
              </ul>
              <button onClick={() => {deleteMessage(index)}}>delete</button>
            </div>
            <div className="massage__text">
              <h4>{subject}</h4>
              <p>{comment}</p> 
            </div>
          </div>
  )
}

export default MassageCard