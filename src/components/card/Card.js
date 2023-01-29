import Rating from "../rating/Rating";
import './Card.scss'
import Slider from "react-slick";
import { addDelCompare } from "../../store/actionCreators/actionCreate";
import { useState } from "react";
import { useEffect } from "react";
import Preloader from "../preloader/Preloader";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    // console.log('render Card');
    const { compared, id, image=[], year, drive, fuel, countPassanger, vievs, ribbonStatus, title, price, location, isNew } = props

   const [foto, setFoto] = useState(false)

   const navigate = useNavigate()

   useEffect(()=>{
    image.forEach((img)=>{
        const picture = new Image()
        picture.src = img
        picture.onload= () => {setFoto(img)}
    })
   },[])

   const goToDiscription = () => {
        navigate(`/car-market/car/${id}`)
   }

   const addToCompare = (e) => {
        e.stopPropagation()
        addDelCompare(id)
   }
    

  return (
    <div className={`car ${props.class}`} onClick={()=>goToDiscription(id)}>      
                <div className="car__img">  
                <Slider>
                    {foto ?
                    image.map((img, ind)=> {
                        return (
                            <div className="car__img" key={ind}>
                                <img src={foto} alt="foto" />
                            </div>
                            )
                    })
                :
                <Preloader/>
                }
                    
                </Slider>
                </div>        
        <div className="car__total">
            <div className="car__discription">
                <div className="statusPanel">
                    <div className="car__new">
                        {isNew ? 'New' : 'Used'}
                    </div>
                    {!compared&&<button className="toggleButton" onClick={addToCompare}>Add To Compare</button>}
                    {compared&&<button className={`toggleButton ${compared ? 'car__compared':''}`} onClick={addToCompare}>Delete from Compare</button>}
                </div>
                <h3>{title}</h3>
                <h4>${price}</h4>
                {location&&<h5>{location.country}, {location.town}</h5>}

                <div className="car__short">
                    <div className="car__label car__date">{year}</div>
                    <div className="car__label car__drive">{drive}</div>
                    <div className="car__label car__fuel">{fuel}</div>
                    <div className="car__label car__passanger">{countPassanger}</div>
                </div>
            </div>
            <div className="car__bottom">
                {(id || id===0) && <Rating id={id}/>}
                <div>
                    {!!props.vievs&&<p>({vievs} Reviews)</p>}
                </div>
            </div>

        </div>
        {ribbonStatus&&
        
        <div className="ribbon">
            <div className="ribbon__text">{ribbonStatus}</div>
        </div>}
        

    </div>
  )
}

export default Card