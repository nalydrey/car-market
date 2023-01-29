import React from 'react'
import { useSelector } from 'react-redux'
import { showHidePopUp } from '../../store/actionCreators/actionCreatePageElements'
import './PopUp.scss'

const PopUp = (props) => {

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

export default PopUp