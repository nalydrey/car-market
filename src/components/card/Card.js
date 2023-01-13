import Rating from "../rating/Rating";
import './Card.scss'


const Card = (props) => {

    const { image, year, drive, fuel, countPassanger, vievs, ribbonStatus, title, price, location, isNew } = props

  return (
    <div className={`car ${props.class}`}>

        <div className="car__img">
            <img src={`./images/cars/${image}`} alt="foto" />
        </div>
        <div className="car__total">
            <div className="car__discription">
                <div className="car__new">
                    {isNew ? 'New' : 'Used'}
                </div>
                <h3>{title}</h3>
                <h4>${price}</h4>
                <h5>{location}</h5>

                <div className="car__short">
                    <div className="car__label car__date">{year}</div>
                    <div className="car__label car__drive">{drive}</div>
                    <div className="car__label car__fuel">{fuel}</div>
                    <div className="car__label car__passanger">{countPassanger}</div>
                </div>
            </div>
            <div className="car__bottom">
                <Rating/>
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