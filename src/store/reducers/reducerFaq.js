import axios from "axios";
import {url} from "../../App";
import {refreshFaq} from "../actionCreators/actionCreateFaq";
import {showHidePopUpSucces} from "../actionCreators/actionCreatePageElements";

const defaultState = {
    car: [],
    buy: [],
    sell: [],
    privacy: []
}

const reducerFaq = (state=defaultState, action) => {
    switch(action.type){
        case 'ADD_NEW_FAQ': {
            state[action.property] = [...state[action.property], action.payload]
            axios.put(url+`faq/`, state).then(resp =>{showHidePopUpSucces(true); refreshFaq(resp.data)})
        }

        case 'REFRESH_FAQ': {
            return {...action.payload}
        }

        case 'DELETE_INFO': {
            console.log(action.name, action.payload)
            state[action.name] = state[action.name].filter(info => action.payload !== info.title)
            axios.put(url+`faq/`, state).then(resp => refreshFaq(resp.data))
        }
        default: return state
    }
}

export default reducerFaq