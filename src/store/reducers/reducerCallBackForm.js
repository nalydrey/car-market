
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

const reducerCallBackForm = (state=defaultState, action) => {
        switch (action.type){
                case 'ADD_CALL_BACK': return {...state, [action.name]: action.payload }

                case 'CLEAN_CALL_BACK_FORM': return {...state, ...defaultState}

                default: return state
        }
}


export default reducerCallBackForm