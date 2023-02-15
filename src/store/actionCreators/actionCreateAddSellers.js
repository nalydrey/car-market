import store from "../store"


const createUser = (fieldName, val) => {
   store.dispatch({type: 'CREATE_USER', field: fieldName, payload: val})
}
const cleanRegisterForm = () => {
   store.dispatch({type: 'CLEAN_REGISTER_FORM'})
}

export { createUser, cleanRegisterForm }