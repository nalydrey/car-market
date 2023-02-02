import React from 'react'
import { useSelector } from 'react-redux'
import { showHidePopUp, showHidePopUpSucces, showHidePopUpFailed  } from '../../store/actionCreators/actionCreatePageElements'
import './PopUp.scss'

export const PopUp = (props) => {

    const { execute } = props

   const popUpStatus = useSelector((state)=>state.pageElements.popupInAddCar) 



   const active = () => {
    showHidePopUp(false)
    execute()
   }


  return (
    <div className={`popup  ${popUpStatus ? 'popup--show':''}`}>
        <p>Add Auto?</p> 
        <div className='popup__button-box'>
            <button onClick={active}>Yes</button>
            <button onClick={()=>showHidePopUp(false)}>No</button>
        </div>
    </div>
  )
}


export const PopUpSucces = () => {

  const popUpStatus = useSelector((state)=>state.pageElements.PopUpInfoSucces) 

   if(popUpStatus){
       const timer = setTimeout((()=>{
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

export const PopUpFailed = () => {
  const popUpStatus = useSelector((state)=>state.pageElements.PopUpInfoFailed) 

  if(popUpStatus){
      const timer = setTimeout((()=>{
       showHidePopUpFailed(false)
       clearTimeout(timer)
      }),2000)        
  }

return (
  <div className={`popup popup--failed ${popUpStatus ? 'popup--show':''}`}>
      <p>Failed</p> 
      <div className='popup__button-box'>
      </div>
  </div>
)
}