import Rating from "../rating/Rating";
import './Card.scss'
import Slider from "react-slick";
import { addDelCompare } from "../../store/actionCreators/actionCreate";
import { useState } from "react";
import { useEffect } from "react";
import Preloader from "../preloader/Preloader";
import { useNavigate } from "react-router-dom";
import noFoto from '../../assets/images/NoImage.jpg'





const Card = (props) => {
    // console.log('render Card');
    const { compared, id, year, drive, fuel, countPassanger, vievs, ribbonStatus, title, price, location, isNew } = props
    let { image=[] } = props

    !image.length && (image = [noFoto])

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
        navigate(`/car/${id}`)
   }

   const addToCompare = (e) => {
        e.stopPropagation()
        addDelCompare(id)
   }

   const stop = (e) => {
       e.stopPropagation()
   }
    

  return (
    <div className={`car ${props.class}`} onClick={()=>goToDiscription(id)}>      
        <div className="slider__wrap" onClick={stop}>  
            {/* <Slider> */}
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
            {/* </Slider> */}
                
        </div>        
        <div className="car__total">
            <div className="car__discription">
                <div className="statusPanel">
                    <div className="car__new">
                        {isNew ? 'New' : 'Used'}
                    </div>
                    {<button className={`toggleButton ${compared ? 'car__compared':''}`} onClick={addToCompare}>{!compared ? 'Add To Compare' : 'Added To Compare'}</button>}
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