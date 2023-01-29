import { useState } from "react";
import {useSelector} from "react-redux";
import {changeFindObj} from "../../store/actionCreators/actionCreate";
import './CheckBoxes.scss'


const CheckBoxes = (props) => {
    // console.log('render CheckBoxes');
    // console.log(props);
    let { labelList=[], sort=false, dataKey, sortDescending=false } = props

    const checkList = useSelector(state => state.findObj[dataKey] )

    const [state, setState] = useState(false)

    //labelList - список меток возле кнопки, по этому списку определяется кол-во кнопок
    //callOutFunction  - внешняя функция которая вызовется при нажатии на кнопку
    //sort - сортировать true - да, false - нет
    //isAscending - true - по возрастанию, false - по убыванию

    sort&&labelList.sort((a,b) => ( sortDescending ? a < b : a > b) ? 1 : -1)
    
    const activate = (buttonName) => {
        let arr = checkList ? checkList : []
        const findLabel = {}
        findLabel[dataKey] = arr
        if(!checkList) {
            findLabel[dataKey].push(buttonName)
        }
        else{
           if (checkList.some(el=>buttonName===el)){
               findLabel[dataKey] = arr.filter((el)=>buttonName!==el)
           }
           else findLabel[dataKey].push(buttonName)
        }

        changeFindObj(findLabel)
        setState(!state)
    }

    const show = (buttonName) => {
       return checkList && checkList.some((el)=> el===buttonName)
    }

  return (
    <>
            {labelList.map((button)=>
            <li className='checkbox' key={button} onClick={()=>{activate(button);}}>
                <button className={`checkbox__button  ${show(button)&&'checkbox__button--active'}`}></button>
                <span>{button}</span>
            </li>
            )}
    </>
  )
}


export default CheckBoxes