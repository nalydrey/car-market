import axios from "axios"
import { url } from "../../App"
import {showHidePopUpSucces} from "../actionCreators/actionCreatePageElements";


const defaultState= {
    callBackForm: {
        carId: '',
        name: '',
        email: '',
        phone: '',
        comment: '',
        subject: '',
    },
    collectObj: {},
    currentModels: [],
    currentSelect: '',
    currentOwner: null,
    currentUser: null,
    editCard: false,
    popUpTextInput: false,
    popupInAddCar: false,
    PopUpInfoSucces: false,
    PopUpInfoFailed: false,
}

const reducerPagesElements = (state=defaultState, action) => {
    switch(action.type){
        case 'ADD_CALL_BACK': 
        {
            state.callBackForm[action.name] = action.payload
            return {...state, callBackForm: {...state.callBackForm} }
        }
        case 'ADD_CALL_BACK_TO_OWNER': 
        {
            state.currentOwner.massages.push({...state.callBackForm})
            Object.keys(state.callBackForm).forEach((el)=>{
                state.callBackForm[el] = ''
            })
            axios.put(`${url}users/${state.currentOwner.id}`, state.currentOwner).then(resp=>showHidePopUpSucces(true))
            return {...state, currentOwner: state.currentOwner, callBackForm: {...state.callBackForm}}
        }


        case 'REFRESH_MESSAGES':  
            state.currentUser.massages = action.payload
            // axios.put(url)
            return {...state, currentUser: {...state.currentUser}} 

        case 'SET_CURRENT_SELECT': return {...state, currentSelect: action.payload}
        case 'ADD_CURRENT_OWNER': return {...state, currentOwner: action.payload}
        case 'ALLOW_ACCESS':
            const data = action.payload ? action.payload : null
            return {...state,  currentUser: data}
        case 'SHOW/HIDE__POPUP': return {...state, popupInAddCar: action.payload}
        case 'SHOW/HIDE__POPUP_SUCCES': return {...state, PopUpInfoSucces: action.payload}
        case 'SHOW/HIDE__POPUP_FAILED': return {...state, PopUpInfoFailed: action.payload}
        case 'SHOW/HIDE__POPUP_INPUT': return  {...state, popUpTextInput: action.payload}
        case 'ADD_COLLECT_OBJECT': return {...state, collectObj: action.payload}
        case 'DELETE_MESSAGE': {
            state.currentUser.massages = state.currentUser.massages.filter((message,i)=>i!==action.payload)
            console.log(action)
            axios.put(url+`users/${action.id}`, state.currentUser)
            return {...state, currentUser: {...state.currentUser}}
        }
        case 'CHANGE_EDIT_STATUS': return {...state, editCard: action.payload}

        default: return state
    }    
}

export default reducerPagesElements