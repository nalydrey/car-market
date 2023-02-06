  //Обьект с данными для поиска

  //Собирает из обьекта obj данные без повторений в обин обьект

  const collectData = (objs, keys=null) => {
    const searchObj = {}
    objs.forEach((el)=>{
      if(keys){
        for( const key of keys){
          //Если такого ключа не существует в новом обьекте, содаем и добавляем его массив значение
          if(!(key in searchObj)){
            searchObj[key] = [el[key]]
          }
          //Если ключ существует - пушим новое значение
          else{
            for(const keyObj in searchObj){
              if(key === keyObj){
                if(!searchObj[keyObj].some((elem)=>elem === el[key])) searchObj[keyObj].push(el[key])
              }
            }
          }
        }
      }
      else{
        for( const key in el){
          //Если такого ключа не существует в новом обьекте, содаем и добавляем его массив значение
          if(!(key in searchObj)){
            searchObj[key] = [el[key]]
          }
          //Если ключ существует - пушим новое значение
          else{
            for(const keyObj in searchObj){
              if(key === keyObj){
                if(!searchObj[keyObj].some((elem)=>elem === el[key])) searchObj[keyObj].push(el[key])
              }
            }
          }
        }

      }
    })
    return searchObj
  }

  export default collectData

