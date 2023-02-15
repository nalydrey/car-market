import React from 'react';
import './UserCard.scss'
import foto from '../../../../assets/icons/avatardefault_92824.png'
import {ReactComponent as Remove} from "../../../../assets/icons/delete-133.svg";


const UserCard = (props) => {

    const { user= {},deleteUser } = props

    return (
        <div className='user-card'>

            <div className='user-card__foto'>
                <img src={user.avatar ? user.avatar : foto} alt="foto"/>
            </div>
            <h3 className='user-card__title'>{user.user.firstName} {user.user.lastName}</h3>
            <h4 className='user-card__organization'>{user.user.organization}</h4>
            <ul className='user-card__contacts-list'>
                {Object.keys(user.contacts).filter((key) => user.contacts[key]).map((key) => {
                    return (
                            <li key={key}>
                                <p>{key}</p>
                                <p>{user.contacts[key]}</p>
                            </li>
                        )
                } )}
            </ul>
            <button onClick={()=>deleteUser(user.id)}><Remove/></button>

        </div>
    );
};

export default UserCard;