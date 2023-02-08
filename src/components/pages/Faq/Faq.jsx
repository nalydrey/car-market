import React, {useEffect, useState} from 'react';
import './Faq.scss'
import {InfoDescr} from "../../infoAccordion/InfoAccordion";
import {useSelector} from "react-redux";
import { deleteFaq} from "../../../store/actionCreators/actionCreateFaq";
import {useNavigate} from "react-router-dom";

const Faq = () => {

    const navigate = useNavigate()
    const currentUser = useSelector(state => state.pageElements.currentUser)
    const faq = useSelector(state => state.faq)
    const [active, setActive] = useState('car')
    console.log(currentUser)

    console.log(active)

    return (
        <>
            <div className='faq larger__container'>
                <h1>FAQ</h1>
                <h2>Frequently asked question</h2>
                <p>Et proin eu, ut lectus nibh nullam tortor mi. </p>
                <div className='faq__main'>
                    <ul className='links-list'>
                        {Object.keys(faq).map((key)=>{
                            return <li onClick={()=>setActive(key)}
                                       key={key}
                                       className={`${(key===active) ? 'link--active' : ''}`}
                            >{key}
                            </li>
                        }) }
                    </ul>
                    <ul className='faq__thems'>
                        {faq[active].map((faq)=> {
                           return <li><InfoDescr data={{title:faq.title, text:faq.text}}
                                                 key={faq.title}
                                                 isAdmin={currentUser?.isAdmin}
                                                 deleteInfo={(title)=>{deleteFaq(active, title )}}
                           /></li>
                        }) }

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Faq;