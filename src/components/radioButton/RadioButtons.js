import './RadioButtons.scss'

const RadioButtons = (props) => {
    // console.log('render RadioButtons');
    // console.log(props);

    const   {
            activeName,        //Имя по которому кнопка устанавливается в активное положение, если оно совпадает с одним из списка labelList
            labelList=[],       //список меток возле кнопки, по этому списку определяется кол-во кнопок
            individualClass='', //имя класса, по которому описана кнопка (строка)
            asButton=false,     //false - имя кнопки установлено возле кнопки true-внутри кнопки
            radioCallBack       //функция которая вызывается по нажанию кнопки
            } = props

  return (
        <ul className={`${individualClass}`}>
            {labelList.map((button)=>
            <li className='radio' key={button} onClick={()=>{radioCallBack(button)}}>
                <button className={`radio__button  ${activeName===button ? 'radio__button--active' : ''}`}>{asButton&&`${button}`}</button>
                {!asButton&&<span>{button}</span>}
            </li>
            )}
        </ul>
  )
}

export default RadioButtons