import React from 'react'
import InputText from '../../../inputComponents/InputText/InputText'
import InputSelect from '../../../inputComponents/InputSelect/InputSelect'
import TextArea from '../../../inputComponents/TextArea/TextArea'
import './CallBackForm.scss'
import { useSelector } from 'react-redux'
import Button from "../../../UI elements/Button/Button";
import {PopUpSucces} from "../../../OutputComponents/PopUp";
import {addCallBack, cleanCallBackForm} from "../../../../store/actionCreators/actionCreatorCallBackForm";
import axios from "axios";
import {url} from "../../../../App";

const CallBackForm = (props) => {

    const { currentOwner} = props
  const callback = useSelector((state)=>state.callBackForm)

 console.log(callback);

    const sendLeter = () => {
        axios.get(url+`users/${currentOwner}`)
            .then(resp => axios.put(url+`users/${currentOwner}`, {...resp.data, massages: [...resp.data.massages, callback]}))
            .then(resp => cleanCallBackForm())
    }

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

        <Button className='call-back__button' text={'Sell My Car'} onClick={sendLeter}/>
        <PopUpSucces/>

    </div>
  )
}

export default CallBackForm