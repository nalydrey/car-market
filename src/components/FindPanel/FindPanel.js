import { useEffect, useRef, useMemo, useState } from 'react';
import CheckBoxes from '../inputComponents/checkBox/CheckBoxes';
import './FindPanel.scss'

const FindPanel = (props) => {
    //data - массив данных для формирования чекчекбоксов
    //isSearch - показать/скрыть панель поиска по-умолчанию скрыта
    //children - заголовок
    //dataKey - имя ключа обьекта поиска, по нему будет создан обьект с этим ключем
    
    // console.log('Render FindPanel');
    // console.log(props);
    
    const { data=[], isSearch = false, children, dataKey, createFindObj, sort=false, sortDescenfind=false, individualStyle='', open=false } = props
    // console.log(data);
    const [isOpen, setOpen] = useState(open)
    const [seeMore, setSee] = useState(data)
    const [search, setSearch] = useState(data)
    const panel = useRef()
    
    useMemo(()=>{
        setSearch(data)
    },[data.length])

    const disable = data.length ? true : false 

    const openClose = (e) => { 
        e.stopPropagation()
        if(disable){

            setOpen(!isOpen)  
        }
    }

    const toggleViev = (e) => {
        setSee(!seeMore)
    }

    const findInList = (e) => {
        let newData = data.filter((el)=>{
                            let a = new RegExp(`${e.target.value}`,'i')
                            if(a.test(el)) return true
                        })
                        setSearch(newData)
    }
    
    const close = () => {
        if(getComputedStyle(panel.current, null).position === 'absolute'){
            setOpen(false)
        }        
    }

    useEffect(()=>{
        document.addEventListener('click', close)
        return () => {
            document.removeEventListener('click', close)
        }
    },[]) 

    
  return (
    <div className={`find__container ${individualStyle}-find__container`} >
        <div className={`find__title ${!disable&&'disable'} ${disable&&isOpen&&'find__title--active'}`}   onClick={openClose}>{children}</div>
        <div className={`deploy ${disable&&isOpen&&'deploy--activate'}`} ref={panel} onClick={(e)=>{e.stopPropagation()}}>
            <div className={`find__opening `}>
                {isSearch&&<input type="text" placeholder='search here' onChange={findInList}/>}
                <ul className={`find__checkbox-container  ${!seeMore&&'openAll'}` }>
                    {search&&<CheckBoxes sort sortDescenfind labelList={search} dataKey={dataKey} callOutFunction={createFindObj}/>}
                </ul>
                { search&&search.length>4&&<button className='find__button' onClick={toggleViev}>{seeMore ? 'See More':'See Less'}</button>}
            </div>        
        </div>
    </div>
  )
}

export default FindPanel