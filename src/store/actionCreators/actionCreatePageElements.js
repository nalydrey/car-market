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
const showHideInputPopUp =  (val) => {
    store.dispatch({type:'SHOW/HIDE__POPUP_INPUT', payload: val})
}

const setCurrentSelect = (val) => {
    store.dispatch({type:'SET_CURRENT_SELECT', payload: val})
}
const addCollectObj = (val) => {
    store.dispatch({type:'ADD_COLLECT_OBJECT', payload: val})
}
const deleteMessage = (val, id) => {
    store.dispatch({type:'DELETE_MESSAGE',id: id, payload: val})
}




export {showHidePopUp,showHidePopUpSucces, showHidePopUpFailed, allowAccess, addCurrentOwner,
    setCurrentSelect,addCollectObj, addCallBack, addCallBackToOwner, showHideInputPopUp, deleteMessage}