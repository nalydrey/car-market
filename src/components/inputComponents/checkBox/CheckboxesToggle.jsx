import {checkFeatures} from "../../../store/actionCreators/actionCreateAddCar";
import './CheckBoxes.scss'

const CheckBoxes = (props) => {
    // console.log('render CheckBoxes');
    // console.log(props);
    let { obj, sort=false, sortDescending=false, filterWord='' } = props

    //labelList - список меток возле кнопки, по этому списку определяется кол-во кнопок
    //callOutFunction  - внешняя функция которая вызовется при нажатии на кнопку
    //sort - сортировать true - да, false - нет
    //isAscending - true - по возрастанию, false - по убыванию
    const labelList = Object.entries(obj)

    const regExp = new RegExp(filterWord, 'i')
    let filteredLabels = regExp ? labelList.filter((label)=>regExp.test(label[0])) : labelList

    sort&&labelList.sort((a,b) => ( sortDescending ? a < b : a > b) ? 1 : -1)

    return (
        <>
            {filteredLabels.map((button)=>
                <li className='checkbox' key={button[0]} onClick={()=>{checkFeatures(button[0]);}}>
                    <button className={`checkbox__button  ${button[1] ? 'checkbox__button--active':''}`}></button>
                    <span>{button}</span>
                </li>
            )}
        </>
    )
}


export default CheckBoxes