const defaultState= {
    collectObj: {},
    currentModels: [],
    currentSelect: '',
    editCard: false,
    popUpTextInput: false,
    popupInAddCar: false,
    PopUpInfoSucces: false,
    PopUpInfoFailed: false,
    activeTags: []
}

const reducerPagesElements = (state=defaultState, action) => {
    switch(action.type){

        case 'SET_CURRENT_SELECT': return {...state, currentSelect: action.payload}
        case 'SHOW/HIDE__POPUP': return {...state, popupInAddCar: action.payload}
        case 'SHOW/HIDE__POPUP_SUCCES': return {...state, PopUpInfoSucces: action.payload}
        case 'SHOW/HIDE__POPUP_FAILED': return {...state, PopUpInfoFailed: action.payload}
        case 'SHOW/HIDE__POPUP_INPUT': return  {...state, popUpTextInput: action.payload}
        case 'ADD_COLLECT_OBJECT': return {...state, collectObj: action.payload}
        case 'CHANGE_EDIT_STATUS': return {...state, editCard: action.payload}
        case 'CHANGE_TAG': {
            const newTagList = state.activeTags.includes(action.payload) ?
                state.activeTags.filter(tag => tag !== action.payload) : [...state.activeTags, action.payload]
            return {...state, activeTags: [...newTagList]}
        }

        default: return state
    }    
}

export default reducerPagesElements