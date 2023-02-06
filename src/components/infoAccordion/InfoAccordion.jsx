import React, {useCallback, useState} from 'react'
import './InfoAccordion.scss'
import changeInscription from '../../functions/changeInscription'
import ImageViewer from "react-simple-image-viewer";

const InfoAccordion = (props) => {
    const {data, objName} = props

    console.log(data)

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


   export const InfoImages = (props) => {



       const {data, objName} = props
       const [isOpen, setOpen] = useState(false)
       console.log(data);

       const [currentImage, setCurrentImage] = useState(0)
       const [currentArray, setArray] = useState(0)
       const [isViewerOpen, setViewerOpen] = useState(false)

       const openImageViewer = useCallback((index, ind) => {
           setArray(ind)
           setCurrentImage(index)
           setViewerOpen(true)
       }, []);

       const closeImageViewer = () => {
           setCurrentImage(0);
           setViewerOpen(false);
       };


       const keysArr = []
       if(data[0]){
           for(const key in data[0].characteristics[objName]){
               keysArr.push(key)
           }
       }


    return(
        data[0] &&
        <div className='infoAccordion'>
            <div className={`info__title ${isOpen ?'info__title--active':''}`} onClick={()=>{setOpen(!isOpen)}}>
                <p>Images</p>
            </div>
            <ul className={`info__img ${!isOpen ?'info__img--active':''}`}>
                { data.map((el, ind)=>{
                return (
                    el&&
                <li key={ind}>
                    {el && el.image.map((foto,i)=>{
                        return(
                        <div className='info__foto' onClick={ () => openImageViewer(i, ind) } key={i}>
                             <img src={foto} alt=""/>
                         </div>)
                    })
                    }
                </li>)
                }
                )
                }

            </ul>
            {isViewerOpen &&
                <ImageViewer src={data[currentArray].image}
                             currentIndex={currentImage }
                             disableScroll={ false }
                             closeOnClickOutside={ true }
                             onClose={ closeImageViewer }
                />}
        </div>
    )
    }

export default InfoAccordion
