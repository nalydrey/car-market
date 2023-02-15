import React, {useEffect, useState} from 'react';
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import InputText from "../../../inputComponents/InputText/InputText";
import './AdminPanel.scss'
import TextArea from "../../../inputComponents/TextArea/TextArea";
import {addNewFaq} from "../../../../store/actionCreators/actionCreateFaq";
import Button from "../../../UI elements/Button/Button";
import {PopUpSucces} from "../../../OutputComponents/PopUp";

const AdminPanel = () => {

    const [chapter, setСhapter] = useState('')
    const [stateObj, setStateObj] = useState({title: '', text:''})
    console.log(stateObj)
    const activeSelect = (_, select) => {
        setСhapter(select)
    }



    const changeTitle = (_, val) =>{
        setStateObj({...stateObj, title: val})
    }
    const changeText = (_, val) => {
        setStateObj({...stateObj, text: val})
    }

    return (
        <div className='faq-addition'>
            <InputSelect title='chapter' list={['car', 'buy', 'sell', 'privacy']} value={chapter} execute={activeSelect}/>
            <InputText title='title' value={stateObj.title} execute={changeTitle}/>
            <TextArea title='text' value={stateObj.text} execute={changeText}/>
            <Button onClick={()=>{addNewFaq(chapter, stateObj)}}/>
            <PopUpSucces/>
        </div>
    );
}

export default AdminPanel;