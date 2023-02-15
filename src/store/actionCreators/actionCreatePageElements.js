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

const addCurrentOwner = (val) => {
    store.dispatch({type:'ADD_CURRENT_OWNER', payload: val})
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

const changeEditStatus = (val) => {
    store.dispatch({type:'CHANGE_EDIT_STATUS', payload: val})
}
const loadAuto = (val) => {
    store.dispatch({type:'LOAD_AUTO', payload: val})
}
const refreshForm = (val) => {
    store.dispatch({type:'REFRESH_FORM', payload: val})
}
const changeTag = (val) => {
    store.dispatch({type:'CHANGE_TAG', payload: val})
}
const editCarAndSend = () => {
    store.dispatch({type:'EDIT_CAR'})
}


export {showHidePopUp,showHidePopUpSucces, showHidePopUpFailed,
    addCurrentOwner,changeTag,
    setCurrentSelect,addCollectObj, showHideInputPopUp,  changeEditStatus,
    loadAuto, refreshForm, editCarAndSend,
}