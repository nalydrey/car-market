import React from 'react';
import InputText from "../../../inputComponents/InputText/InputText";
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import './Setting.scss'
import {useSelector} from "react-redux";
// import {changePersonalData} from "../../../../store/actionCreators/actionCreatePageElements";
import axios from "axios";
import {url} from "../../../../App";
import {logDOM} from "@testing-library/react";
import Button from "../../../UI elements/Button/Button";
import {changePersonalData} from "../../../../store/actionCreators/actionCreatorCurrentUser";

const Setting = () => {
    const myData = useSelector(state => state.currentUser)

    const changeData = () => {
        axios.put(url+`users/${myData.id}`, myData).then((resp)=>console.log('!!!'))
    }


    return (
        <>
            <div className='personal__data'>
              <h2>Personal data</h2>
              <InputText title='first name'  gridName='first' value={myData.user.firstName} execute={changePersonalData}/>
              <InputText title='last name' gridName='last' value={myData.user.lastName} execute={changePersonalData}/>
              <InputSelect title='seller' gridName='select' list={['seller', 'dealer']} value={myData.user.organization} execute={changePersonalData}/>
              <InputText title='password' value={myData.user.password} execute={changePersonalData}/>
            </div>
            <div className='personal__contacts'>
                <h2>Contacts</h2>
                <InputText title='telephone' value={myData.contacts.tel} execute={changePersonalData}/>
                <InputText title='email' value={myData.contacts.email} execute={changePersonalData}/>
                <InputText title='instagram' value={myData.contacts.instagram} execute={changePersonalData}/>
                <InputText title='facebook' value={myData.contacts.facebook} execute={changePersonalData}/>
            </div>
            <Button text='Change data' onClick={changeData}/>
        </>
    );
};

export default Setting;