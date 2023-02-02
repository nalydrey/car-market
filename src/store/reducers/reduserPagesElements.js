import axios from "axios"
import { url } from "../../App"

const defaultState= {
    callBackForm: {
        name: '',
        email: '',
        phone: '',
        comment: '',
        subject: '',
    },
    currentOwner: null,
    currentUser: null,
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

            // fetch(`${url}users/${state.currentOwner.id}`,{
            //     method: 'PUT',
            //     body: JSON.stringify(state.currentOwner),
            //     headers: {'content-type': 'application/json;charset=UTF-8'}
            // })
            axios.put(`${url}users/${state.currentOwner.id}`, state.currentOwner)
            return {...state, currentOwner: state.currentOwner, callBackForm: {...state.callBackForm}}
        }


        case 'REFRESH_MESSAGES':  
            state.currentUser.massages = action.payload
            // axios.put(url)
            return {...state, currentUser: {...state.currentUser}} 
        
        case 'ADD_CURRENT_OWNER': return {...state, currentOwner: action.payload}
        case 'ALLOW_ACCESS': return {...state, currentUser:{...action.payload}}
        case 'SHOW/HIDE__POPUP': return {...state, popupInAddCar: action.payload}
        case 'SHOW/HIDE__POPUP_SUCCES': return {...state, PopUpInfoSucces: action.payload}
        case 'SHOW/HIDE__POPUP_FAILED': return {...state, PopUpInfoFailed: action.payload}
        default: return state
    }    
}

export default reducerPagesElements