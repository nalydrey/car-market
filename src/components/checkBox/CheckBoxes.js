import { useEffect, useMemo, useState } from "react";
import './CheckBoxes.scss'
import { useCommonContext } from "../../AppContext/AppContext";

const CheckBoxes = (props) => {
    // console.log('render CheckBoxes');
    // console.log(props);




    const { createFindObj, resetFilters, findObj } = useCommonContext()

    const countInObj = (obj) => {
        let counter = 0;        
        for(const key in obj){
           counter = counter + obj[key].length
        }
        return counter            
    }
    
    //labelList - список меток возле кнопки, по этому списку определяется кол-во кнопок
    //callOutFunction  - внешняя функция которая вызовется при нажатии на кнопку
    //sort - сортировать true - да, false - нет
    //isAscending - true - по возрастанию, false - по убыванию
    let { labelList=[], sort=false, dataKey, sortDescending=false } = props


    sort&&labelList.sort((a,b) => ( sortDescending ? a < b : a > b) ? 1 : -1)

    const state = () => {   
        const arr = labelList.map((elem)=>{
            if(findObj[dataKey]){
                return{
                    label: elem,
                    isActive: findObj[dataKey].some((el)=>elem === el)
                }
            }
            else{
                return {
                    label:elem,    
                    isActive:  false
                }
            }
        })
        return arr
    }

    const [selected, setChose] = useState(state())
   
    const string = labelList.toString()
    
    useMemo(()=>{
        setChose(state())
    },[string])

    
    const activate = (buttonName) => {
        const arr = []
        const a = {}
        a[dataKey] = arr
        
        selected.forEach((elem)=>{            
            buttonName===elem.label&&(elem.isActive = !elem.isActive)
            elem.isActive && arr.push(elem.label)     
            return elem        
        })
        createFindObj&&createFindObj(a)
    }    

    // console.log(selected);


  return (
    <>
    {/* {console.log('!!!')} */}
            {selected.map((button)=>
            <li className='checkbox' key={button.label} onClick={()=>{activate(button.label);}}>
                <button className={`checkbox__button  ${button.isActive&&'checkbox__button--active'}`}></button>
                <span>{button.label}</span>
            </li>
            )}
    </>
  )
}


export default CheckBoxes