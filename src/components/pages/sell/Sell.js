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
import PopUp from '../../OutputComponents/PopUp';
import PopUpSucces from '../../OutputComponents/PopUpSucces';
import { showHidePopUp, showHidePopUpSucces } from '../../../store/actionCreators/actionCreatePageElements';
import store from '../../../store/store';

const Sell = () => {

    const value = useSelector((state)=> state.newCar)

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
                // console.log(json)
                store.dispatch({type: 'LOAD_DATA', payload: json})
            })})
    }
   

  return (
      <section className='sell'>
        <h1>Sell</h1>

        <div className='sell__container container'>

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

        </div>
      </section>
  )
}



export default Sell