import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../../../../App'
import { useNavigate } from 'react-router-dom'
import {cleanRegisterForm, createUser} from '../../../../store/actionCreators/actionCreateAddSellers'
import { addUserId } from '../../../../store/actionCreators/actionCreateAddCar'
import { PopUpFailed } from '../../../OutputComponents/PopUp'
import { showHidePopUpFailed} from '../../../../store/actionCreators/actionCreatePageElements'
import {allowAccess} from "../../../../store/actionCreators/actionCreatorCurrentUser";
import InpString from "../../../UI elements/InpString/InpString";
import axios from "axios";



export const RegisterForm = () => {

const user = useSelector((state)=>state.newUser)
const addUser = (e) => {
    e.preventDefault()
    axios.post(url+'users', user).then(resp => cleanRegisterForm())
}

  return (
     <form action="" onSubmit={addUser}>
         <InpString name={'Name'}
                    type={'text'}
                    placeholder={'Name'}
                    value={user.user.firstName}
                    setValue={(text)=>createUser('FULL_NAME', text)}
                    required
         />
         <InpString name={'Email'}
                    type={'email'}
                    placeholder={'email@mail.com'}
                    value={user.contacts.email}
                    setValue={(text)=>createUser('EMAIL', text)}
                    required
         />
         <InpString name={'Phone number'}
                    type={'number'}
                    value={user.contacts.tel}
                    placeholder={'000-000-000'}
                    setValue={(text)=>createUser('TEL', text)}
                    required
         />
         <InpString name={'password'}
                    type={'password'}
                    placeholder={'31aawFRQ'}
                    value={user.user.password}
                    setValue={(text)=>createUser('PASSWORD', text)}
                    required
         />


        <input className='submit__button' type="submit" value='Create My Account' />
     </form>
  )
}

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const checkUser = (e) => {
        console.log(email + '   ' + password);
        e.preventDefault()
        
        fetch(url+`users?contacts.email=${email}&user.password=${password}`)
            .then((req)=>req.json())
            .then((json)=>{
                if(!json.length){
                   showHidePopUpFailed(true)
                }
                else{
                    addUserId(json[0].id)
                    allowAccess(json[0])
                    navigate('/office')
                    localStorage.setItem('loginedUser', JSON.stringify(json[0].id))
                }
            })

        e.target.reset()
    }

  return (
    <>
        <form action="" onSubmit={checkUser}>
            <InpString name={'email'}
                       type={'email'}
                       value={email}
                       setValue={(text)=>setEmail(text)}
                       required
            />
            <InpString name={'passwors'}
                       type={'password'}
                       value={password}
                       setValue={(text)=>setPassword(text)}
                       required
            />
            <input className='submit__button' type="submit" value='Login' />
        </form>
        <PopUpFailed/>
    </>
  )
}


