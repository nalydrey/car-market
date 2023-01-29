import React from 'react'


export const RegisterForm = () => {

  return (
     <form action="">
        <label htmlFor="">
            <input type="text" required/>
            <span>Full Name</span>
        </label>
        <label htmlFor="">
            <input type="email" required/>
            <span>Email</span>
        </label>
        <label htmlFor="">
            <input type="tel" required/>
            <span>Phone Number</span>
        </label>
        <label htmlFor="">
            <input type="password" required/>
            <span>Password</span>
        </label>
        <input className='submit__button' type="submit" value='Create My Account' />
    </form>
  )
}

export const LoginForm = () => {
  return (
    <form action="">       
        <label htmlFor="">
            <input type="email" required/>
        <span>Email</span>
        </label>        
        <label htmlFor="">
            <input type="password" required/>
        <span>Password</span>
        </label>
        <input className='submit__button' type="submit" value='Login' />
    </form>
  )
}


