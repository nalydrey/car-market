import store from "../store"

const showHidePopUp = (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP', payload: val})
}
const showHidePopUpSucces = (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP_SUCCES', payload: val})
}

export {showHidePopUp,showHidePopUpSucces}