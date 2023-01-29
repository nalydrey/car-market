import store from "../store";

const CHANGE_OBJ = 'CHANGE_OBJ'
const RADIO_CHANGE = 'RADIO_CHANGE'
const RESET = 'RESET'



const changeFindObj = (data) => {
store.dispatch({type: CHANGE_OBJ, payload: data})
}

const changeNewOrUsed = (data) => {
    store.dispatch({type: RADIO_CHANGE, payload: data})
}
const resetAllFilters = () => {
    store.dispatch({type: RESET})
}
const addDelCompare = (data) => {
    store.dispatch({type: 'ADD/DEL_COMPARE', payload: data})
}


export {changeFindObj, changeNewOrUsed, resetAllFilters, addDelCompare}