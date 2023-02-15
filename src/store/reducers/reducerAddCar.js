import axios from "axios";
import {url} from "../../App";
import {changeEditStatus} from "../actionCreators/actionCreatePageElements";

import {loadAllCars} from "../actionCreators/actionCreate";

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
        'date addition': null,
        location: {
            country:'',
            town:''
        },
        year: '',
        fuel: '',
        drive: '',
        'count passenger': '',
        rating: 0,
        totalRat: 0,
        views: 0,
        ribbonStatus: '',
        compared: false,
        isNew: null,
        description: '',
        characteristics:
            {
                'general info':
                    {
                        brand: '',
                        'body type': '',
                        color: ''
                    },
                'engine details':
                    {
                        'fuel type': '',
                        mileage: '',
                        transmission: '',
                        'engine capacity': '',
                        power:'',
                    },
                dimension:
                    {
                        length:'',
                        width:'',
                        height:'',
                        'cargo volume':'',
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

    const templateCar = JSON.parse(JSON.stringify(defaultState))

const reducerAddCar = (state=defaultState, action) => {
    switch(action.type){

        case 'SELECT_OPTIONS':
            {
                switch (action.name){
                    case 'body type': return {...state, characteristics: {...state.characteristics, 'general info': {...state.characteristics['general info'], 'body type': action.payload}}}
                    case 'brand':     return {...state, brand: action.payload,   characteristics: {...state.characteristics, 'general info': {...state.characteristics['general info'], brand: action.payload}}}
                    case 'model': return {...state, model: action.payload }
                    case 'year':  return {...state, year: action.payload }
                    case 'color': return {...state, characteristics: {...state.characteristics, 'general info': {...state.characteristics['general info'], color: action.payload}}}
                    case 'fuel':  return {...state, fuel: action.payload, characteristics: {...state.characteristics, 'engine details': {...state.characteristics['engine details'], 'fuel type': action.payload}}}
                    case 'transmission': return {...state, characteristics: {...state.characteristics, 'engine details': {...state.characteristics['engine details'], transmission: action.payload}}}
                    case 'drive': return {...state, drive: action.payload}
                    case 'title': return {...state, title: action.payload }
                    case 'country': return {...state, location: {...state.location, country: action.payload}}
                    case 'town': return {...state, location: {...state.location, town: action.payload}}
                }
            }

        case 'ADD_DESCRIPTION':    
            {
                switch(action.name){
                    case 'description': return {...state, description: action.payload } 
                }
            }



            
        case 'ADD_USER_ID':         return {...state, userId: action.payload}
        case 'SELECT_PASSANGER':    return {...state, "count passenger": action.payload}

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
        case 'CHANGE_MILAGE':       state.characteristics['engine details'].mileage = action.payload
                                    return {...state}
        case 'CHANGE_ENGINE':       state.characteristics['engine details']['engine capacity'] = action.payload
                                    return {...state}
        case 'CHANGE_POWER':        state.characteristics['engine details'].power = action.payload
                                    return {...state}
        case 'CHANGE_CARGO':        state.characteristics.dimension['cargo volume'] = action.payload
                                    return {...state}
        case 'CHANGE_HEIGHT':       state.characteristics.dimension.height = action.payload
                                    return {...state}
        case 'CHANGE_WIDTH':        state.characteristics.dimension.width = action.payload
                                    return {...state}
        case 'CHANGE_LENGTH':       state.characteristics.dimension.length = action.payload
                                    return {...state}
        case 'CHECK_FEATURES':      const features = state.characteristics.features
                                    for (const key in features) {
                                        key === action.payload && (features[key] = !features[key])
                                    }
                                        return {...state}
        case 'CHENGE_PRICE':        {  return{...state, price: action.payload}}
        case 'CLEAN_FORM': {
            state = JSON.parse(JSON.stringify(templateCar))
            return {...state}
        }
        case 'EDIT_CAR': {
            axios.put(url+`cars/${state.id}`, state)
                .then(resp=>axios.get(url+'cars'))
                    .then(resp=> {loadAllCars(resp.data); changeEditStatus(false)})
            state = JSON.parse(JSON.stringify(templateCar))
            return {...state}
        }

        case 'REFRESH_FORM': {
            return {...action.payload}
        }


    }
    return state
}

export default reducerAddCar