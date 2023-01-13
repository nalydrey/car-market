import './Rating.scss'
import { useState } from 'react'

const Rating = () => {
    const arr = [1,2,3,4,5]
    
    let stat = 3
    const [curentStatus, setStatus] = useState(3)

    let rating =  curentStatus*20;
    const handler = (e) => {
        const div = parseInt((e.target.closest('.rating__item').dataset.rating));
        setStatus(div)        
    }
   
    

  return (
    <div className="rating"> 
        <div className='rating__bottom'>  
            {
                arr.map((el,ind)=>{
                    return(
                        <div className='rating__item' data-rating={ind+1} onClick={()=>{stat = 5}} onMouseOver={handler} onMouseOut={()=>setStatus(stat)} key={el}>
                            <img src="./icons/star.svg" alt="" />
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
                            <img src="./icons/starfill.svg" alt="" />
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