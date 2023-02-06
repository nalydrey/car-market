import React from 'react'
import InputText from '../../../inputComponents/InputText/InputText'
import InputSelect from '../../../inputComponents/InputSelect/InputSelect'
import TextArea from '../../../inputComponents/TextArea/TextArea'
import './CallBackForm.scss'
import { addCallBack, addCallBackToOwner } from '../../../../store/actionCreators/actionCreatePageElements'
import { useSelector } from 'react-redux'
import Button from "../../../UI elements/Button";
import {PopUpSucces} from "../../../OutputComponents/PopUp";

const CallBackForm = (props) => {

    const {carId} = props
  const callback = useSelector((state)=>state.pageElements.callBackForm)

 console.log(callback);

  return (
    <div className='call-back-form' >
       <h2>Contacts</h2>
       <InputText   title='name' 
                    execute={addCallBack}
                    value={callback.name}
       />
       <InputText   title='phone' 
                    execute={addCallBack}
                    value={callback.phone}
       />
       <InputText   title='email' 
                    execute={addCallBack}
                    value={callback.email}
       />
       <InputSelect title='subject'
                    list={['subject','object']}
                    execute={addCallBack}
                    value={callback.subject}

       />
       <TextArea    title='comment'
                    placeholder='Leave a message here'
                    execute={addCallBack}
                    value={callback.comment}

        /> 

        <Button className='call-back__button' text={'Sell My Car'} onClick={()=>{addCallBack('carId', carId); addCallBackToOwner()}}/>
        <PopUpSucces/>

    </div>
  )
}

export default CallBackForm