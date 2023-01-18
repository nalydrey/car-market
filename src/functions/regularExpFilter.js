
//Принимает объект dataObj в котором производится поиск и строку поиска findWord (какое нибудь слово)
//Возвращает массив отфильтрованных по слову findWord элементов

const regExpFilter = (dataObj, findWord) =>{
    const regExp = new RegExp(`${findWord}`, 'i')
    return dataObj.filter((ObjItem)=>{
        for(const key in ObjItem){
            // console.log(regExp.test(ObjItem[key] && ObjItem[key].toString()));
            if(regExp.test(ObjItem[key] && ObjItem[key].toString())){
                return true
            }
        }
    })
}

export default regExpFilter