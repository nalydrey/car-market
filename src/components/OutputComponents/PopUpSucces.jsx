import React from 'react'
import { useSelector } from 'react-redux'
import { showHidePopUpSucces } from '../../store/actionCreators/actionCreatePageElements'
import './PopUp.scss'

const PopUpSucces = () => {


   const popUpStatus = useSelector((state)=>state.pageElements.PopUpInfoSucces) 
    console.log(popUpStatus);

    if(popUpStatus){
        const timer = setTimeout((()=>{
         console.log('!!!');
         showHidePopUpSucces(false)
         clearTimeout(timer)
        }),2000)        
    }

  return (
    <div className={`popup popup--succes ${popUpStatus ? 'popup--show':''}`}>
        <p>Succes</p> 
        <div className='popup__button-box'>
        </div>
    </div>
  )
}

export default PopUpSucces