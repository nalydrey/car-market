import React from 'react'
import InputText from '../../../inputComponents/InputText/InputText'
import InputSelect from '../../../inputComponents/InputSelect/InputSelect'
import TextArea from '../../../inputComponents/TextArea/TextArea'
import './CallBackForm.scss'
import { addCallBack, addCallBackToOwner } from '../../../../store/actionCreators/actionCreatePageElements'
import { useSelector } from 'react-redux'

const CallBackForm = () => {

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
        <button className='submit' onClick={addCallBackToOwner}
                >Sell My Car
        </button>

    </div>
  )
}

export default CallBackForm