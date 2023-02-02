import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../preloader/Preloader";
import Panel from "./panel/Panel";
import { useSelector } from "react-redux";
import InfoDiscription from "./infoDiscription/InfoDiscription";
import Features from "./Features/Features";
import Seller from "./Seller/Seller";
import { url } from "../../../App";
import { addCurrentOwner } from "../../../store/actionCreators/actionCreatePageElements";
import CallBackForm from "./CallBackForm/CallBackForm";
import "./Car.scss";


const Car = () => {
  const { id } = useParams();
  const car = useSelector((state) => state.cars).find((car) => car.id === +id);
  const owner = useSelector((state)=> state.pageElements.currentOwner)
  console.log(owner);

  useEffect(()=>{
    fetch(url+ `users/${car.userId}`)
    .then(req=>req.json())
    .then(json=>{
          console.log(json);
            addCurrentOwner(json)
        })
  }, [car.userId])

  console.log(owner);

  return (
    <section className="info">
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
          />}
          <CallBackForm/>
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
