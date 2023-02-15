import store from "../store";

const addCallBack = (name, val) => {
    store.dispatch({type:'ADD_CALL_BACK',name: name, payload: val})
}
const cleanCallBackForm = () => {
    store.dispatch({type:'CLEAN_CALL_BACK_FORM'})
}

export {addCallBack, cleanCallBackForm}