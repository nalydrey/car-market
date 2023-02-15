import React from 'react'
import noFoto from '../../../assets/icons/avatardefault_92824.png'
import {ReactComponent as Call} from '../../../assets/icons/call.svg'
import {ReactComponent as Envelope} from '../../../assets/icons/envelope.svg'
import './Seller.scss'

const Seller = (props) => {

    const { firstName='', lastName='', organization='', tel='', email='', foto, titleOn=true } = props

   

  return (
    <div className='seller'>
        {titleOn && <h2>{organization} info</h2>}
        <ul className='seller__contacts'>
            <li className='seller__name'>
                <div className='seller__avatar'>
                    <img src={foto ? foto : noFoto} alt="avatar" />
                </div>
                <h4>{firstName} {lastName}</h4>
                <h5>{organization}</h5>
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