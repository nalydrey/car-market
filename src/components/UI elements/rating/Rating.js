import './Rating.scss'
import { useState } from 'react'
import { url } from '../../App'
import store from '../../store/store'
import { useSelector } from 'react-redux'


const Rating = (props) => {
    const arr = [1,2,3,4,5]

    const {id} = props
    

    const obj = useSelector((state) => state.cars.find(el=>{return el.id===id}))
    const [curentStatus, setStatus] = useState(obj.rating)

    let rating =  curentStatus*20;
    const handler = (e) => {
        const div = parseInt((e.target.closest('.rating__item').dataset.rating));
        setStatus(div)        
    }

    const sendRating = (rat) => {
        fetch(url+`cars/${id}`)
            .then (req => req.json())
            .then (json => {            
                json.totalRat=json.totalRat+rat
                json.vievs=json.vievs+1
                json.rating = Math.round(json.totalRat/json.vievs*100)/100
                 fetch(url+`cars/${id}`,{
                    method: 'PUT',
                    body: JSON.stringify(json),
                    headers: {'content-type': 'application/json;charset=UTF-8'}                    
                })
                    .then(req=>{
                        fetch(url+'cars')
                        .then(req => req.json())
                        .then(json => {
                            store.dispatch({type: 'LOAD_DATA', payload: json})
                        })
                    })
            })
  
    }
   
    

  return (
    <div className="rating"> 
        <div className='rating__bottom'>  
            {
                arr.map((el,ind)=>{
                    return(
                        <div className='rating__item' 
                             data-rating={ind+1} 
                             onClick={(e)=> {e.stopPropagation(); sendRating(el)}} 
                             onMouseOver={handler} 
                             onMouseOut={()=>setStatus(obj.rating)}                              
                             key={el}>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                            </svg>

                        </div>
                    )
                })
            }
        </div>    
        <div className="bar" style={{width: `${rating}%`}}>
            <div className='rating__top'>
            {
                arr.map((el)=>{
                    return(
                        <div className='rating__item' key={el}>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </svg>
                        </div>
                    )
                })
            }
            </div>       
        </div>   
    </div>


   
  )
}

export default Rating