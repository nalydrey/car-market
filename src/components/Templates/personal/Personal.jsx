import React from 'react';
import './Personal.scss'

import personal from "../../../datas/personal";

const Personal = (props) => {

    const {person=personal[0]} = props
    // console.log(person)
    return (
        <div className='personal'>
            <div className='personal__foto'>
                <img src={person.foto} alt=""/>
            </div>
            <div className='personal__discription'>
                <h3>{person.name} {person.surname}</h3>
                <h4>{person.prof}</h4>
                <p>{person.discr}</p>
            </div>

        </div>
    );
};

export default Personal;