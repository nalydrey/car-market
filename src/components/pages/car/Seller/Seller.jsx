import React from 'react'
import noFoto from '../../../../assets/images/NoImage.jpg'
import {ReactComponent as Call} from '../../../../assets/icons/call.svg'
import {ReactComponent as Envelope} from '../../../../assets/icons/envelope.svg'
import './Seller.scss'

const Seller = (props) => {

    const { firstName='', lastName='', organization='', tel='', email='', foto=noFoto } = props

   

  return (
    <div className='seller'>
        <h2>{organization} info</h2>
        <ul className='seller__contacts'>
            <li className='seller__name'>
                <div className='seller__avatar'>
                    <img src={foto} alt="avatar" />
                </div>
                <h4>{firstName} {lastName}</h4>
                <p>{organization}</p>
            </li>
            <li>
                <div className="icon"><Call/></div>
                <span>{tel}</span> 
            </li>
            <li>
                <div className="icon"><Envelope/></div>
                <span>{email}</span> 
            </li>
        </ul>
    </div>
  )
}

export default Seller