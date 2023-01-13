import { useMemo, useState } from 'react'
import { useCommonContext } from '../../AppContext/AppContext'
import './RadioButtons.scss'


const RadioButtons = (props) => {
    //labelList - список меток возле кнопки, по этому списку определяется кол-во кнопок
    // createFindObj - функция изменяющая обьект поиска   
    // findObj - обьект для поиска
    // console.log(props);

    const {labelList=[] } = props

    const { findObj, choseCars } = useCommonContext()

    const buttons = [] 
    for(let i = 0; i<labelList.length; i++){
        buttons.push(labelList[i])
    }

    let activateStatus = ''

    if (!findObj.isNew.length){
        activateStatus = 'All'
    }
    else {
            activateStatus = (findObj.isNew[0]) ? 'New' : 'Used'       
    } 
 
    const activate = (buttonName) => {
        if( choseCars){
            switch(buttonName){
                case 'All': choseCars({isNew: []})
                break
                case 'New': choseCars({isNew: [true]})
                break
                case 'Used': choseCars({isNew: [false]})
                break
            }
        }
    }

  return (
      <ul className="radio__container">
        {buttons.map((button)=>
        <li className='radio' key={button} onClick={()=>{activate(button)}}>
            <button className={`radio__button  ${activateStatus===button&&'radio__button--active'}`}></button>
            <span>{button}</span>
        </li>
        )}

    </ul>
  )
}

export default RadioButtons