const defaultState =
    {
        id: 0,
        userId: 0,
        image: [],
        brand: '',
        model: '',
        title: '',
        price:  0,
        oldPrice: null,
        location: {
            country:'',
            town:''
        },
        year: '',
        fuel: '',
        drive: '',
        countPassenger: '',
        rating: 0,
        totalRat: 0,
        views: 0,
        ribbonStatus: '',
        compared: false,
        isNew: null,
        description: '',
        characteristics:
            {
                generalInfo:
                    {
                        brand: '',
                        bodyType: '',
                        color: ''
                    },
                engineDetails:
                    {
                        fuelType: '',
                        mileage: '',
                        transmission: '',
                        engineCapacity: '',
                        power:'',
                    },
                dimension:
                    {
                        length:'',
                        width:'',
                        height:'',
                        cargoVolume:'',
                    },
                features:
                    {
                        'Power Steering': false,
                        'Heated Seats': false,
                        'USB Port': false,
                        'AC': false,
                        'Bluetooth': false,
                        'Alarm': false,
                        'Wifi': false,
                        'Cruise Control': false,
                        'Front Parking Sensor': false,
                        'Rear Parking Sensor': false,
                        'Power Window': false,
                        'Sunroof': false,
                        'Sound System': false,
                        'Memory Seat': false,
                        'Roof Rack': false,
                        'Other': false,
                    }
            }
    }


const reducerAddCar = (state=defaultState, action) => {
    switch(action.type){

        case 'SELECT_OPTIONS':
            {
                switch (action.name){
                    case 'body type': {
                        (state.characteristics.generalInfo.bodyType = action.payload)
                        return {...state}
                    }  
                    case 'brand': {
                        (state.characteristics.generalInfo.brand = action.payload)
                        return {...state, brand: action.payload }
                    }
                    case 'model': return {...state, model: action.payload }
                    case 'year':  return {...state, year: action.payload }
                    case 'color':{
                        (state.characteristics.generalInfo.color = action.payload)
                        return {...state }
                    } 
                    case 'fuel':{
                        state.characteristics.engineDetails.fuelType = action.payload
                        return {...state, fuel: action.payload}
                    } 
                    case 'transmission':{
                        state.characteristics.engineDetails.transmission = action.payload
                        return {...state}
                    } 
                    case 'drive': return {...state, drive: action.payload}  
                    case 'title': return {...state, title: action.payload }
                    case 'country': {
                        state.location.country = action.payload
                        return {...state}
                    }
                    case 'town': {
                        state.location.town = action.payload
                        return {...state}
                    }
                }
            }

        case 'ADD_DESCRIPTION':    
            {
                switch(action.name){
                    case 'description': return {...state, description: action.payload } 
                }
            }



            
        case 'ADD_USER_ID':         return {...state, userId: action.payload}
        case 'SELECT_PASSANGER':    return {...state, countPassanger: action.payload}

        case 'CHANGE_TITLE':        


        case 'CHANGE_CONDITION':    {
                                    switch (action.payload){
                                            case 'New': return {...state, isNew: true}
                                            case 'Used': return {...state, isNew: false}
                                    }
            }
        case 'ADD_IMAGE':           state.image.push(action.payload)
                                    return {...state}
        case 'DELETE_IMAGE':        state.image.splice(action.payload,1)
                                    return {...state}
        case 'CHANGE_MILAGE':       state.characteristics.engineDetails.mileage = action.payload
                                    return {...state}
        case 'CHANGE_ENGINE':       state.characteristics.engineDetails.engineCapacity = action.payload
                                    return {...state}
        case 'CHANGE_POWER':        state.characteristics.engineDetails.power = action.payload
                                    return {...state}
        case 'CHANGE_CARGO':        state.characteristics.dimension.cargoVolume = action.payload
                                    return {...state}
        case 'CHANGE_HEIGHT':       state.characteristics.dimension.height = action.payload
                                    return {...state}
        case 'CHANGE_WIDTH':        state.characteristics.dimension.width = action.payload
                                    return {...state}
        case 'CHANGE_LENGTH':       console.log(action.payload);
        state.characteristics.dimension.length = action.payload
                                    return {...state}
        case 'CHECK_FEATURES':      const features = state.characteristics.features
                                    for (const key in features) {
                                        key === action.payload && (features[key] = !features[key])
                                    }
                                        return {...state}
        case 'CHENGE_PRICE':        {  return{...state, price: action.payload}}
                  



    }
    return state
}

export default reducerAddCar