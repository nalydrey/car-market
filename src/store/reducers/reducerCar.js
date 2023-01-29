
const defaultState = []


const reducerCar = (state=defaultState, action) => {
    switch (action.type){
        case 'LOAD_DATA': {
            state = []
            return [...state,  ...action.payload ];
        }
        case 'ADD/DEL_COMPARE': {
            console.log(action.payload);
            console.log(state[0].compared);
            state.forEach((car)=>{
                console.log(car.id===action.payload);
                car.id===action.payload && (car.compared = !car.compared)
                console.log(state[0].compared);
            })
          return  [...state]
        }

        default: return state
    }
}

export default reducerCar