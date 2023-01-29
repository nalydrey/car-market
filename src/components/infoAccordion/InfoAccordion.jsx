import React, { useState } from 'react'
import './InfoAccordion.scss'
import changeInscription from '../../functions/changeInscription'

const InfoAccordion = (props) => {
    const {data, objName} = props
    const [isOpen, setOpen] = useState(false)
    console.log(objName);

    const keysArr = []    
//    console.log(objName);
   if(data[0]){
       for(const key in data[0].characteristics[objName]){
           keysArr.push(key)
       } 
   }
    // console.log(objName);
// console.log(changeInscription(objName));


  return (
        <div className='infoAccordion'>
            <div className={`info__title ${isOpen ?'info__title--active':''}`} onClick={()=>{setOpen(!isOpen)}}>
            <p>{objName}</p> 
            </div>  
            <ul className={`info__deploy ${!isOpen ?'info__deploy--active':''}`}>
                {keysArr.map((el)=>{
                    return(
                    <>
                        {/* {console.log(} */}
                        <li>{el}</li>
                        <li>
                            {data.map((car,i)=>{
                                return car&&<p key={i}>{car.characteristics[objName][el]===true ? 'yes' : car.characteristics[objName][el]===false ? 'no' : car.characteristics[objName][el]}</p>
                            })}
                        </li>
                    </>)
                })
                }         
            </ul>
        </div>
    )
}

export default InfoAccordion