import { useEffect, useState } from 'react';
import CheckBoxes from '../checkBox/CheckBoxes';
import './FindPanel.scss'

const FindPanel = (props) => {
    //data - массив данных для формирования чекчекбоксов
    //isSearch - показать/скрыть панель поиска по-умолчанию скрыта
    //children - заголовок
    //dataKey - имя ключа обьекта поиска, по нему будет создан обьект с этим ключем
    
    // console.log('Render FindPanel');
    // console.log(props);
    
    const { data=[], isSearch = false, children, dataKey, createFindObj, sort=false, sortDescenfind=false, individualStyle='' } = props

    const [isOpen, setOpen] = useState(false)
    const [seeMore, setSee] = useState(data)
    const [search, setSearch] = useState(data)

    const disable = data.length ? true : false 

    const openClose = (e) => { 
        if(disable){

            seeMore&&setSee(!seeMore)  
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
    

  return (
    <div className={`find__container ${individualStyle}-find__container`} >
        <div className={`find__title  ${disable&&isOpen&&'find__title--active'}`}   onClick={openClose}>{children}</div>
        <div className={`deploy ${disable&&isOpen&&'deploy--activate'}`}>
            <div className={`find__opening `}>
                {isSearch&&<input type="text" placeholder='search here' onChange={findInList}/>}
                <ul className={`find__checkbox-container  ${seeMore&&'openAll'}` }>
                    {search&&<CheckBoxes sort sortDescenfind labelList={data} dataKey={dataKey} callOutFunction={createFindObj}/>}
                </ul>
                { search&&search.length>4&&<button className='find__button' onClick={toggleViev}>{seeMore ?'See Less':'See More'}</button>}
            </div>        
        </div>
    </div>
  )
}

export default FindPanel