import axios from "axios";
import {url} from "../../App";
import {refreshUser} from "../actionCreators/actionCreatorCurrentUser";

const defaultState = {
    id: null,
    isAdmin: false,
    avatar: '',
    user: {
        firstName: '',
        lastName: '',
        organization: 'seller',
        password: '',
    },
    type: '',
    contacts: {
        tel: '',
        email:'',
        instagram:'',
        facebook: '',
    },
    advertCounter: 0,
    viewedCars: [],
    addedCars: [],
    comments: [],
    massages: []
}

const reducerCurrentUser = (state= null, action) => {
    switch(action.type){

        case 'CHANGE_PERSONAL_DATA': {
            switch (action.name){
                case 'first name': return {...state, user: {...state.user, firstName: action.payload }}
                case 'last name': return {...state, user: {...state.user, lastName: action.payload }}
                case 'password': return {...state, user: {...state.user, password: action.payload }}
                case 'seller': return {...state, user: {...state.user, organization: action.payload }}
                case 'telephone': return {...state, contacts: {...state.contacts, tel: action.payload }}
                case 'email': return {...state, contacts: {...state.contacts, email: action.payload }}
                case 'instagram': return {...state, contacts: {...state.contacts, instagram: action.payload }}
                case 'facebook': return {...state, contacts: {...state.contacts, facebook: action.payload }}
                }
        }

        case 'ALLOW_ACCESS': return action.payload ? {...state, ...action.payload} : null
        case 'DELETE_MESSAGE': {
            const massages = state.massages.filter((_,ind) =>ind !== action.ind )
            axios.put(url+`users/${action.id}`, {...state, massages: [...massages]})
                .then(resp => refreshUser(resp.data))
        }
        case 'REFRESH_USER': return {...state, ...action.payload}
        case 'PUSH_CAR_TO_HYSTORY':{
            const cars = state.viewedCars.filter(id => id !== action.payload)
            axios.put(url+`users/${action.id}`, {...state, viewedCars: [...cars, action.payload]})
                .then(resp => refreshUser(resp.data))
        }

        case 'SET_HYSTORY': axios.put(url+`users/${action.id}`, {...state, viewedCars: [...action.payload]})
                                .then(resp => refreshUser(resp.data))



        default: return state
    }
}

export default reducerCurrentUser