import store from "../store";
import axios from "axios";
import {url} from "../../App";

const changePersonalData = (name, val) => {
    store.dispatch({type:'CHANGE_PERSONAL_DATA',name, payload: val})
}
const allowAccess = (val) => {
    store.dispatch({type:'ALLOW_ACCESS', payload: val})
}

const deleteMessage = (ind, id) => {
    store.dispatch({type:'DELETE_MESSAGE',ind,  id})
}
const refreshUser = (user) => {
    store.dispatch({type:'REFRESH_USER', payload: user})
}
const pushCarToHistory = (user, id) => {
    store.dispatch({type:'PUSH_CAR_TO_HYSTORY', payload: user, id})
}
const setHistory = (arr, id) => {
    store.dispatch({type:'SET_HYSTORY', payload: arr, id})
}




export {changePersonalData, allowAccess, deleteMessage, refreshUser, pushCarToHistory, setHistory}