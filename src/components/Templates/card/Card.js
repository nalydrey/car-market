import Rating from "../rating/Rating";
import './Card.scss'
import {addDelCompare, loadAllCars} from "../../store/actionCreators/actionCreate";
import { useState } from "react";
import { useEffect } from "react";
import Preloader from "../preloader/Preloader";
import { useNavigate } from "react-router-dom";
import noFoto from '../../assets/images/NoImage.jpg'
import Slider from "../Slider/Slider";
import {ReactComponent as Prev} from '../../assets/icons/prev.svg';
import {ReactComponent as Next} from '../../assets/icons/next.svg';
import {ReactComponent as Edit} from "../../assets/icons/edit-pen-svgrepo-com.svg";
import {ReactComponent as Remove} from "../../assets/icons/delete-133.svg";
import {changeEditStatus, loadAuto, refreshForm} from "../../store/actionCreators/actionCreatePageElements";
import axios from "axios";
import {firstLoad, url} from "../../App";
import {useSelector} from "react-redux";
import {pushCarToHistory} from "../../store/actionCreators/actionCreatorCurrentUser";

const prev = <Prev/>
const next = <Next/>
const Card = (props) => {
    // console.log('render Card');
    // console.log(props)
    const { compared, id, userId, year, drive, fuel, countPassanger, vievs, ribbonStatus, title, price, location, isNew, deleteCard=null, deleteFromHist=null } = props
    let { image=[] } = props

    const currentUser = useSelector(state => state.currentUser)
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
       // currentUser && addToHistory()
       pushCarToHistory(id, currentUser.id)
   }

   const addToCompare = (e) => {
        e.stopPropagation()
        addDelCompare(id)
   }

   const stop = (e) => {
       e.stopPropagation()
       deleteFromHist(id)
   }

   const editCar = (e) => {
        e.stopPropagation()
       changeEditStatus(true)
       loadAuto(id)
       axios.get(url+`cars/${id}`).then(resp => {refreshForm(resp.data); navigate('/sell', {state: id})})

   }

    const deleteCar = (e) =>{
        e.stopPropagation()
        axios.delete(url+`cars/${id}`).then((resp)=> {
            console.log('!!!')
            deleteCard && deleteCard()
            firstLoad()
        })
    }

    const deleteFromHistory = (e) =>{
        e.stopPropagation()
        deleteFromHist(id)
    }

  return (
    <div className={`car ${props.class}`} onClick={()=>goToDiscription(id)}>      
        <div className="slider__wrap" onClick={stop}>

                {foto ?
                 <Slider dots buttons proportion={0.73} prevInner={prev} nextInner={next}>
                     {image.map((img, ind)=> {
                        return <div className="bar__item" key={ind} style={{backgroundImage: `url(${img})`}}/>
                    })}

                 </Slider>
                :
                <Preloader/>}

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

        {currentUser && (currentUser.id === userId) &&
        <div className='card__control'>
            <button className='car__edit' onClick={editCar}><Edit/></button>
            <button className='car__delete' onClick={deleteCar}><Remove/></button>
        </div>}
        {deleteFromHist && <button className='car__delete history' onClick={deleteFromHistory}><Remove/></button>}



    </div>
  )
}

export default Card