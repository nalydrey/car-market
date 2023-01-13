import React, { useContext, useEffect, useMemo, useState } from 'react'
import cars from '../datas/cars'
import filterData from '../functions/filterData'

const ContextApplication = React.createContext()

export const useCommonContext = () => {
    return useContext(ContextApplication)
} 

const AppContext = ({children}) => {
    // console.log('render Context');
    //Все автомобили
    const allCars = [...cars]
    
    //найденные автомобили в результате фильтрации находящиеся на странице
    // const [filteredCars, setFilteredCars] = useState(allCars)

    //Обьект поиска содержит свойтсва и массив к ним по которым работают фильтры
    const [findObj, setFindObj] = useState({isNew: []})
    // console.log(findObj);

    //отфильтрованные по цене автомобили
    const filteredCars = findObj.isNew && findObj.isNew.length ? filterData(allCars, {isNew: findObj.isNew }) : allCars
 
    const filterWorkCars = filterData(filteredCars, findObj)
    const workCars = filterWorkCars.length ? filterWorkCars : allCars

    //Сброс фильтров меняестя на противоположное значение при нажатии на кнопку
        const [resetFilters, setResetFilters] = useState(false)
          
    const createFindObj = (inData) => {   
        for(const key in inData){
          findObj[key] = inData[key]
          findObj[key].length === 0 &&delete findObj[key]
        }
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
        }      
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




  return (
    <ContextApplication.Provider value={{
                                            createFindObj,
                                            choseCars,
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