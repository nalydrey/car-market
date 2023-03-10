import {combineReducers, createStore} from "redux";
import reducerCar from "./reducers/reducerCar";
import reducerFind from "./reducers/reducerFind";
import reducerAddCar from "./reducers/reducerAddCar";
import reducerPagesElements from "./reducers/reduserPagesElements";
import reducerAddSeller from "./reducers/reducerAddSeller";
import reducerFaq from "./reducers/reducerFaq";
import reducerCurrentUser from "./reducers/reducerCurrentUser";
import reducerCallBackForm from "./reducers/reducerCallBackForm";
import reducerGetInTouch from "./reducers/reducerGetInTouch";


const rootReducer = combineReducers({
    cars: reducerCar,
    findObj: reducerFind,
    newCar: reducerAddCar,
    pageElements: reducerPagesElements,
    newUser: reducerAddSeller,
    faq: reducerFaq,
    currentUser: reducerCurrentUser,
    callBackForm: reducerCallBackForm,
    getInTouch: reducerGetInTouch
})

    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const state = store.getState()


export default store
