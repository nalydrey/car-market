
const defaultState = {
    id: 0,
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

const reducerAddSeller = (state=defaultState, action ) => {
    switch(action.type){
        case 'CREATE_USER': 
            switch(action.field){
                case 'FULL_NAME': return {...state, user: {...state.user, firstName: action.payload}}
                case 'EMAIL': return {...state, contacts: {...state.contacts, email: action.payload}}
                case 'TEL': return {...state, contacts: {...state.contacts, tel: action.payload}}
                case 'PASSWORD': return {...state, user: {...state.user, password: action.payload}}
            }
        case 'CLEAN_REGISTER_FORM': return {...defaultState}
        default: return state
    }
}

export default reducerAddSeller