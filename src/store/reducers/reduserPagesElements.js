
const defaultState= {
    popupInAddCar: false,
    PopUpInfoSucces: false
}

const reducerPagesElements = (state=defaultState, action) => {
    switch(action.type){
        case 'SHOW/HIDE__POPUP': return {...state, popupInAddCar: action.payload}
        default: return state
        case 'SHOW/HIDE__POPUP_SUCCES': return {...state, PopUpInfoSucces: action.payload}
    }    
}

export default reducerPagesElements