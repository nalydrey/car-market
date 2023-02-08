import './Sell.scss'
import {useSelector} from "react-redux";
import {url} from "../../../App";
import CarDetail from "./carDetail/CarDetail";
import EngineDetails from "./EngineDetails/EngineDetails";
import LoadImage from "./LoadImage/LoadImage";
import Dimension from "./Demension/Dimension";
import Features from "./Features/Features";
import Price from "./Price/Price";
import Geolocation from "./Geolocation/Geolocation";
import { PopUp, PopUpSucces } from '../../OutputComponents/PopUp';
import {
    editCarAndSend,
    showHidePopUp,
    showHidePopUpSucces
} from '../../../store/actionCreators/actionCreatePageElements';
import {cleanForm, selectOption} from "../../../store/actionCreators/actionCreateAddCar";
import store from '../../../store/store';
import {useLocation, useNavigate} from 'react-router-dom';
import PopUpInput from "../../OutputComponents/PopUpInput";
import Button from "../../UI elements/Button";

const Sell = () => {


    const carId = useLocation().state
    const carTemplate = useSelector((state)=> state.newCar)
    const pageState = useSelector((state)=>state.pageElements)
    const collect = pageState.collectObj
    console.log(collect)
    const toRegister = useNavigate()
    const toLogin = useNavigate()
    const currentUser = pageState.currentUser
    const popUpTextState = pageState.popUpTextInput
    const currentModels = pageState.currentModels

    const sendToBase = () => {
        const date = new Date().toLocaleString()
        const value = {...carTemplate, userId: currentUser.id, 'date addition': date}
        fetch(url+'cars',{
            method: 'POST',
            body: JSON.stringify(value),
            headers: {'content-type': 'application/json;charset=UTF-8'}
        }).then((a)=>{
            showHidePopUpSucces(true)
            fetch(url+'cars')
            .then(req => req.json())
            .then(json => {

                store.dispatch({type: 'LOAD_DATA', payload: json})
            })})
        cleanForm()
    }




   

  return (
      <section className='sell'>
        <h1>Sell</h1>
        
        <div className='sell__container container'>
        {currentUser ?
        <>
            <CarDetail year={collect.year} brand={collect.brand} bodyType={collect['body type']} color={collect.color} model={currentModels}/>
            <EngineDetails fuel={collect['fuel type']} drive={collect.drive} transmission={collect.transmission}/>
            <Dimension/>
            <LoadImage/>
            <Features/>
            <Price/>
            <Geolocation/>
            {!pageState.editCard &&<Button text={'Sell My Car'} onClick={()=>showHidePopUp(true)}/>}
            {pageState.editCard && <Button text={'Edit'} onClick={editCarAndSend}/>}
            <PopUp execute={sendToBase}/>
            <PopUpSucces/>
            <PopUpInput state={popUpTextState}
                        text={carTemplate.brand}
                        execute={(val)=>selectOption(pageState.currentSelect, val)}
            />
        </>
        :
          <div className='change-block offer'>
            <h2>To sell a car you need to register or input login</h2>
            <div className='offer__buttons'>
                <button onClick={()=>{toRegister('/user/register')}}>Register</button>
                <button onClick={()=>{toLogin('/user/login')}}>Login</button>
            </div>
          </div>  }

        </div>
        
      </section>
  )
}



export default Sell