// let showCars = [...newCars]

//inputData - обьект входных данных
//findObj - обьект для поиска

const filterData = (inputData, findObj) => {
    for(const key in  findObj)
    {
      if (findObj[key].length){
        
          inputData = inputData.filter((car)=>{          
          if(key in car){
            for(const el of findObj[key]){
              if(key==='price'){
                if(findObj.price[0]<=car.price && car.price <= findObj.price[1]) return true
              }
              if(el === car[key])
              {
                return true
              }
            }
          }
        })
      } 
    }
    return inputData
}

export default filterData