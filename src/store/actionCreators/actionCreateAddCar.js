import store from "../store";



const selectPassanger = (val) => {
   store.dispatch({type: 'SELECT_PASSANGER', payload: val})
}

const changeCondition = (val) => {
   store.dispatch({type: 'CHANGE_CONDITION', payload: val})
}

const addDiscription = (name, val) => {
   store.dispatch({type: 'ADD_DESCRIPTION', name: name, payload: val})
}
const addImages = (val) => {
   store.dispatch({type: 'ADD_IMAGE', payload: val})
}
const deleteFoto = (val) => {
   store.dispatch({type: 'DELETE_IMAGE', payload: val})
}

const changeMilage = (val) => {
   store.dispatch({type: 'CHANGE_MILAGE', payload: val})
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

const addUserId = (val) => {
   store.dispatch({type: 'ADD_USER_ID', payload: val})
}
const selectOption = (name, val) => {
   store.dispatch({type: 'SELECT_OPTIONS', name:name, payload: val})
}


export {selectPassanger,  deleteFoto, addImages, changeCondition, addDiscription,
    changeMilage,  changeEngine, changePower,changeLength,
   changeWidth, changeHeight, changeCargo, checkFeatures, changePrice,
    addUserId, selectOption
}