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
import { showHidePopUp, showHidePopUpSucces } from '../../../store/actionCreators/actionCreatePageElements';
import store from '../../../store/store';
import { useNavigate } from 'react-router-dom';

const Sell = () => {



    const value = useSelector((state)=> state.newCar)
    const isRegistered = useSelector((state)=>state.pageElements.currentUser)
    const toRegister = useNavigate()
    const toLogin = useNavigate()

    const sendToBase = () => {
        console.log(value)
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
    }


   

  return (
      <section className='sell'>
        <h1>Sell</h1>
        
        <div className='sell__container container'>
        {isRegistered ?
        <>
            <CarDetail/>
            <EngineDetails/>
            <Dimension/>
            <LoadImage/>
            <Features/>
            <Price/>
            <Geolocation/>
            <button className='submit'
                    onClick={()=>showHidePopUp(true)}>Sell My Car
            </button>
            <PopUp execute={sendToBase}/>
            <PopUpSucces/>
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