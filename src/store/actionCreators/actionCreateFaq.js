import store from "../store";

const addNewFaq = (name, val) => {
    store.dispatch({type:'ADD_NEW_FAQ',property:name, payload: val})
}
const refreshFaq = (val) => {
    store.dispatch({type:'REFRESH_FAQ', payload: val})
}
const deleteFaq = (prop, val) => {
    store.dispatch({type:'DELETE_INFO',name: prop, payload: val})
}

export {addNewFaq, refreshFaq, deleteFaq}