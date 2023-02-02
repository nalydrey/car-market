import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../../../../App'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../../../store/actionCreators/actionCreateAddSellers'
import { addUserId } from '../../../../store/actionCreators/actionCreateAddCar'
import { PopUpFailed } from '../../../OutputComponents/PopUp'
import { showHidePopUpFailed, allowAccess } from '../../../../store/actionCreators/actionCreatePageElements'



export const RegisterForm = () => {

const user = useSelector((state)=>state.newUser)
const addUser = (e) => {
    e.preventDefault()
    fetch(url+'users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json;charset=UTF-8'}
    })
    e.target.reset()
} 

  return (
     <form action="" onSubmit={addUser}>
        <label htmlFor="">
            <input type="text" required onChange={(e)=>createUser('FULL_NAME', e.target.value)}/>
            <span>Full Name</span>
        </label>
        <label htmlFor="">
            <input type="email" required onChange={(e)=>createUser('EMAIL', e.target.value)}/>
            <span>Email</span>
        </label>
        <label htmlFor="">
            <input type="tel" required onChange={(e)=>createUser('TEL', e.target.value)}/>
            <span>Phone Number</span>
        </label>
        <label htmlFor="">
            <input type="password" required onChange={(e)=>createUser('PASSWORD', e.target.value)}/>
            <span>Password</span>
        </label>
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
        
        fetch(url+`users?user.password=${password}&user.email=${email}`)
            .then((req)=>req.json())
            .then((json)=>{
                console.log(json.length);
                if(!json.length){
                    console.log('!!!');
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
            <label htmlFor="">
                <input type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
            <span>Email</span>
            </label>        
            <label htmlFor="">
                <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
            <span>Password</span>
            </label>
            <input className='submit__button' type="submit" value='Login' />
        </form>
        <PopUpFailed/>
    </>
  )
}


