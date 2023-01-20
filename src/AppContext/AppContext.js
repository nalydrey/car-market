import React, { useContext, useEffect, useMemo, useState } from 'react'
import cars from '../datas/cars'
import filterData from '../functions/filterData'
import regExpFilter from '../functions/regularExpFilter'

const ContextApplication = React.createContext()

export const useCommonContext = () => {
    return useContext(ContextApplication)
} 

const AppContext = ({children}) => {

    let radioActiveName = 'All'
    // console.log('render Context');
    //Все автомобили
    const allCars = [...cars]
    
    //найденные автомобили в результате фильтрации находящиеся на странице
    // const [filteredCars, setFilteredCars] = useState(allCars)

    //Обьект поиска содержит свойтсва и массив к ним по которым работают фильтры
    const [findObj, setFindObj] = useState({isNew: []})
    
    const [compareArr, setCompare] = useState([])

    const [findWord, setFindWord] = useState('')

    const [reload, setReload] = useState(false)


    //отфильтрованные по новизне автомобили
    const filteredCars = findObj.isNew && findObj.isNew.length ? filterData(allCars, {isNew: findObj.isNew }) : allCars
 
    let filterWorkCars = filterData(filteredCars, findObj)

    //поиск автомобиля по запросу
    filterWorkCars = findWord ? (regExpFilter(filterWorkCars, findWord)) : filterWorkCars

    const workCars = filterWorkCars.length ? filterWorkCars : []

    //Рекомендуемые автомобили
    
    //Сброс фильтров меняестя на противоположное значение при нажатии на кнопку
        const [resetFilters, setResetFilters] = useState(false)
          
    const createFindObj = (inData) => {   
        for(const key in inData){
          findObj[key] = inData[key]
          findObj[key].length === 0 &&delete findObj[key]
        }
        console.log(findObj);
        setFindObj({...findObj, ...inData})

        // setWorkCars(filterData(filteredCars, findObj))  
    }





    const choseCars = (inData) => {
        if(findObj.isNew[0] !== inData.isNew[0]){
            findObj.isNew = inData.isNew
            for(const key in findObj){
                !(key === 'isNew') && delete findObj[key] 
            }
            setFindObj({...findObj, isNew: inData.isNew} )
        setFindWord('')

        }      
    }

    const filterByQuery = (find) => {
        setFindWord(find)
    }

    const reset = () => {
        for (const key in findObj){
            if (!(key==='isNew')) delete findObj[key]
        }
        setResetFilters(!resetFilters)
        setFindObj(findObj)
        const numberCars = filterData(allCars, findObj)
        // setFilteredCars(numberCars)
    }

    //Вызывается по нажатию на радиокнопку
    const radioChose = (buttonName) => {
        if(choseCars){
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

    const activateRadioName = (data) => {
        if(data===undefined)
        return 'All'
        if(data)
        return 'New'
        if(!data)
        return 'Used'
    } 

    radioActiveName = activateRadioName(findObj.isNew[0])       


    //Выбрать для сравнения

    const addCar = (id) => {
  
        allCars.forEach((car)=>{
        car.id === id && (car.compared = !car.compared)
        setReload(!reload)
    })
    }





  return (
    <ContextApplication.Provider value={{
                                            filterByQuery,
                                            createFindObj,
                                            radioChose,
                                            addCar,
                                            compareArr,
                                            radioActiveName,
                                            reset,
                                            filteredCars,
                                            findObj,
                                            workCars,
                                            resetFilters,
                                            allCars,
                                        }}>
        {children}
    </ContextApplication.Provider>

  )
}

export default AppContext