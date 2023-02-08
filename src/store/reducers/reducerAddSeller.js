
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
                case 'FULL_NAME': {
                    const name = action.payload.split(' ')
                    state.user.firstName = name[0]
                    state.user.lastName = name[1] ? name[1] : ''
                    return {...state}
                }
                case 'EMAIL': {
                    state.contacts.email = action.payload 
                    return {...state}
                }
                case 'TEL': {
                    state.contacts.tel = action.payload 
                    return {...state}
                }
                case 'PASSWORD': {
                    state.user.password = action.payload 
                    return {...state}
                }

            }

        default: return state
    }
}

export default reducerAddSeller