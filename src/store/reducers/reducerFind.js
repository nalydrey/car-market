import filterData from "../../functions/filterData";


const defaultState = {
    isNew: []
}

const reducerFind = (state = defaultState, action) => {
    switch(action.type){

        case 'CHANGE_OBJ': {
            console.log('!!!')
            for(const key in action.payload){
            state[key] = action.payload[key]
            state[key].length === 0 &&delete state[key]
             }
            return {...state}
        }

        case 'RADIO_CHANGE':{
            // console.log(action.payload)
            switch(action.payload){
                case 'All': return {...state, isNew: []}
                    break
                case 'New': return {...state, isNew: [true]}
                    break
                case 'Used': return {...state, isNew: [false]}
                    break
            }
        }

        case 'RESET':{
                for (const key in state){
                    if (!(key==='isNew')) delete state[key]
                }
                return {...state}

        }


        default:  return state
    }
}

export default reducerFind
