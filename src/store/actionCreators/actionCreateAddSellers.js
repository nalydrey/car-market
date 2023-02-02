import store from "../store"


const createUser = (fieldName, val) => {
   store.dispatch({type: 'CREATE_USER', field: fieldName, payload: val})
}


export { createUser }