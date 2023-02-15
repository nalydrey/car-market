import axios from "axios";
import {url} from "../../App";
import {cleanGetForm} from "../actionCreators/actionCreateGetInTouch";

const defaultState= {
    userId: '',
    avatar: '',
    image: '',
    name: '',
    email: '',
    phone: '',
    comment: '',
    subject: '',
}

const reducerGetInTouch = (state=defaultState, action) => {
    switch (action.type){
        case 'ADD_MESSAGE_TO_ADMIN': return {...state, [action.name]: action.payload }
        case 'SEND_FORM_TO_ADMINS': {
            axios.get(url+`users?isAdmin=true`).then(resp=>{
                resp.data.forEach(admin => {
                    axios.put(url+`users/${admin.id}`, {...admin, massages: [...admin.massages, {...state, ...action.payload}]})
                        .then(resp => cleanGetForm())
                })
            })
        }
        case 'AUTO_FILL': return {...state, ...action.payload}

        case 'CLEAN_GET_FORM': return {...defaultState}

        default: return state
    }
}

export default reducerGetInTouch