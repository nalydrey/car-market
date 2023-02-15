import React, {useEffect, useState} from 'react'
import './Contacts.scss'
import background from '../../../assets/images/background.jpg'
import InpString from "../../UI elements/InpString/InpString";
import {useSelector} from "react-redux";
import TextArea from "../../inputComponents/TextArea/TextArea";
import Button from "../../UI elements/Button/Button";
import footer from '../../../datas/footer'
import {ReactComponent as Phone} from '../../../assets/icons/contacts/phone.svg'
import {ReactComponent as Email} from '../../../assets/icons/contacts/email.svg'
import {ReactComponent as Location} from '../../../assets/icons/inputIcons/location.svg'
import {addMessToAdmin, autoFill, sendToAdmins} from "../../../store/actionCreators/actionCreateGetInTouch";


const Contacts = (props) => {
    console.log(props)
    const form = useSelector(state=>state.getInTouch)

    useEffect(()=>{
        autoFill({...props})
    },[])
    const sendFormToAdmins = (e) => {
        e.preventDefault()
        sendToAdmins()
    }

    return (
        <section className='get' style={{backgroundImage: `url(${background})`}}>
            <div className='larger__container'>
                <h1>Get in touch</h1>
                <div className='get__wrapper'>
                    <form className='get__form' onSubmit={sendFormToAdmins}>
                        <InpString name={'name'}
                                   setValue={(text)=>{addMessToAdmin('name', text)}}
                                   value={form.name}
                                   placeholder={'Full Name'}
                        />
                        <InpString type={''}
                                   name={'email'}
                                   setValue={(text)=>{addMessToAdmin('email', text)}}
                                   value={form.email}
                                   placeholder={'E-mail'}
                        />
                        <InpString type={'password'}
                                   name={'phone'}
                                   setValue={(text)=>{addMessToAdmin('phone', text)}}
                                   value={form.phone}
                                   placeholder={'000-000-000'}
                        />
                        <TextArea placeholder={'Leave a message here'}
                                  name = {'comment'}
                                  value = {form.comment}
                                  execute = {addMessToAdmin}
                        />
                        <Button/>
                    </form>
                    <div className='get__board'>
                        <ul>
                            <li>
                                <p>
                                    <span><Phone/></span>
                                    <span>Phone</span>
                                </p>
                                <p>{footer.contacts.tel}</p>
                            </li>
                            <li>
                                <p>
                                    <span><Email/></span>
                                    <span>Email</span>
                                </p>
                                <p>{footer.contacts.mail}</p>
                            </li>
                            <li>
                                <p>
                                    <span><Location/></span>
                                    <span>Adress</span>
                                </p>
                                <p>{footer.contacts.adress}</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contacts;