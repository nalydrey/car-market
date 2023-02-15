import store from "../store";

const addMessToAdmin = (name, val) => {
    store.dispatch({type:'ADD_MESSAGE_TO_ADMIN',name: name, payload: val})
}
const sendToAdmins = ( val) => {
    store.dispatch({type:'SEND_FORM_TO_ADMINS', payload: val})
}
const autoFill = ( val) => {
    store.dispatch({type:'AUTO_FILL', payload: val})
}
const cleanGetForm = () => {
    store.dispatch({type:'CLEAN_GET_FORM'})
}

export {addMessToAdmin, cleanGetForm, sendToAdmins, autoFill}