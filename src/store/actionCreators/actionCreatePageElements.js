import store from "../store"

const showHidePopUp = (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP', payload: val})
}
const showHidePopUpSucces = (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP_SUCCES', payload: val})
}
const showHidePopUpFailed = (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP_FAILED', payload: val})
}
const allowAccess = (val) => {
    store.dispatch({type:'ALLOW_ACCESS', payload: val})
}
const addCurrentOwner = (val) => {
    store.dispatch({type:'ADD_CURRENT_OWNER', payload: val})
}
const addCallBack = (name, val) => {
    store.dispatch({type:'ADD_CALL_BACK',name: name, payload: val})
}
const addCallBackToOwner = (name, val) => {
    store.dispatch({type:'ADD_CALL_BACK_TO_OWNER',name: name, payload: val})
}
const refreshMessages =  (val) => {
    store.dispatch({type:'REFRESH_MESSAGES', payload: val})
}




export {showHidePopUp,showHidePopUpSucces, showHidePopUpFailed, allowAccess, addCurrentOwner, addCallBack, addCallBackToOwner, refreshMessages}