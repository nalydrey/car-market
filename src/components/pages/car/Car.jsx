import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../UI elements/preloader/Preloader";
import Panel from "./panel/Panel";
import { useSelector } from "react-redux";
import InfoDiscription from "./infoDiscription/InfoDiscription";
import Features from "./Features/Features";
import Seller from "../../Templates/Seller/Seller";
import { url } from "../../../App";
import CallBackForm from "./CallBackForm/CallBackForm";
import "./Car.scss";
import Slider from "../../Slider/Slider";
import {ReactComponent as Prev} from '../../../assets/icons/prev.svg';
import {ReactComponent as Next} from '../../../assets/icons/next.svg';
import axios from "axios";
import {addCallBack} from "../../../store/actionCreators/actionCreatorCallBackForm";




const Car = () => {
  const { id } = useParams();
  const car = useSelector((state) => state.cars).find((car) => car.id === +id);
  const [owner, setOwner] = useState(null)

  useEffect(()=>{
    axios.get(url+ `users/${car.userId}`).then(resp => setOwner(resp.data))
      addCallBack('image', car.image[0])

  }, [car.userId])

  return (
    <section className="info">
        <div className='header__wrap'>
            <div className='container'>
                <h1>
                    {car.title}
                </h1>
            </div>
        </div>
        {!!car.image.length  &&
        <div className='container slider-car'>
            <Slider preview buttons prevInner={<Prev/>} nextInner={<Next/>}>
                {car.image.map((img, ind)=> <div className="bar__item" key={ind} style={{backgroundImage: `url(${img})`}}/>)}
            </Slider>
        </div> }
      <div className="container info__container">
        {car ?
        <>
        <div className="info__left">
          <InfoDiscription discription={car.description}/>
          <Features objFeat={car.characteristics.features}/>
          {owner && 
          <Seller 
                  firstName={owner.user.firstName}
                  lastName={owner.user.lastName}
                  organization={owner.user.organization}
                  tel={owner.contacts.tel}
                  email={owner.contacts.email}
                  foto={owner.avatar}
          />}
          <CallBackForm  currentOwner={car.userId}/>
        </div>

        <div className="info__right">
        <button className="info__button">$ {car.price}</button>
          
            <Panel
              obj={car.characteristics}
              id={car.id}
              compared={car.compared}
              views={car.vievs}
            />
        </div>
        </>
        :
          <Preloader />
        }
      </div>
    </section>
  );
};

export default Car;

