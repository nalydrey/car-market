import store from "../store";



const selectPassanger = (val) => {
   store.dispatch({type: 'SELECT_PASSANGER', payload: val})
}
const changeTitle = (val) => {
   store.dispatch({type: 'CHANGE_TITLE', payload: val})
}
const changeBodyType = (val) => {
   store.dispatch({type: 'CHANGE_BODY_TYPE', payload: val})
}
const changeBrand = (val) => {
   store.dispatch({type: 'CHANGE_BRAND', payload: val})
}
const changeModel = (val) => {
   store.dispatch({type: 'CHANGE_MODEL', payload: val})
}
const changeCondition = (val) => {
   store.dispatch({type: 'CHANGE_CONDITION', payload: val})
}
const changeYear = (val) => {
   store.dispatch({type: 'CHANGE_YEAR', payload: val})
}
const changeColor = (val) => {
   store.dispatch({type: 'CHANGE_COLOR', payload: val})
}
const addDiscription = (val) => {
   store.dispatch({type: 'ADD_DISCRIPTION', payload: val})
}
const addImages = (val) => {
   store.dispatch({type: 'ADD_IMAGE', payload: val})
}
const deleteFoto = (val) => {
   store.dispatch({type: 'DELETE_IMAGE', payload: val})
}
const changeFuel = (val) => {
   store.dispatch({type: 'CHANGE_FUEL', payload: val})
}
const changeDrive = (val) => {
   store.dispatch({type: 'CHANGE_DRIVE', payload: val})
}
const changeMilage = (val) => {
   store.dispatch({type: 'CHANGE_MILAGE', payload: val})
}
const changeTransmission = (val) => {
   store.dispatch({type: 'CHANGE_TRANSMISSION', payload: val})
}
const changeEngine = (val) => {
   store.dispatch({type: 'CHANGE_ENGINE', payload: val})
}
const changePower = (val) => {
   store.dispatch({type: 'CHANGE_POWER', payload: val})
}
const changeLength = (val) => {
   store.dispatch({type: 'CHANGE_LENGTH', payload: val})
}
const changeWidth = (val) => {
   store.dispatch({type: 'CHANGE_WIDTH', payload: val})
}
const changeHeight = (val) => {
   store.dispatch({type: 'CHANGE_HEIGHT', payload: val})
}
const changeCargo = (val) => {
   store.dispatch({type: 'CHANGE_CARGO', payload: val})
}
const checkFeatures = (val)=>{
   store.dispatch({type: 'CHECK_FEATURES', payload: val})
}
const changePrice = (val) => {
   store.dispatch({type: 'CHENGE_PRICE', payload: val})
}
const setCountry = (val) => {
   store.dispatch({type: 'SET_COUNTRY', payload: val})
}
const setTown = (val) => {
   store.dispatch({type: 'SET_TOWN', payload: val})
}

export {selectPassanger, changeFuel, deleteFoto, addImages,changeTitle, changeBodyType,
   changeBrand, changeModel, changeCondition, changeYear, changeColor, addDiscription,
   changeDrive, changeMilage, changeTransmission, changeEngine, changePower,changeLength,
   changeWidth, changeHeight, changeCargo, checkFeatures, changePrice,setCountry,
   setTown
}