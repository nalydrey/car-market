import Tesla1 from '../assets/images/cars/Tesla1.jpg'
import Ford1 from '../assets/images/cars/Ford1.jpg'
import Honda1 from '../assets/images/cars/Honda1.jpg'
import Chevrolet1 from '../assets/images/cars/Chevrolet1.jpg'
import Kia1 from '../assets/images/cars/Kia1.jpg'
import Mini1 from '../assets/images/cars/Mini1.jpg'
import Jeep1 from '../assets/images/cars/Jeep1.jpg'
import Audi1 from '../assets/images/cars/Audi1.jpg'
import LandRover1 from '../assets/images/cars/LandRover1.jpg'
import Toyota1 from '../assets/images/cars/Toyota1.jpg'

const cars =[
    {
        id: 0,
        image: Tesla1,
        brand: 'Tesla',
        model: 'Model 3 Standard Range Plus',
        title: 'Tesla Model 3 Standard Range Plus',
        price:  57148,
        oldPrice: null,
        location: 'Florida, USA',
        year: 2020,
        fuel: 'Electric',
        drive: 'Rear-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 11,
        ribbonStatus: 'Featured',
        compared: false,
        isNew: true,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Tesla',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }

    },
    {
        id: 1,
        image: Ford1,
        brand: 'Ford',
        model: 'F-250 Super Duty',
        title: 'Ford F-250 Super Duty' ,
        price: 82089,
        oldPrice: null,
        location: 'Milan, Italy',
        year: 2021,
        fuel: 'Diesel',
        drive: 'Four-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: 'Featured',
        compared: false,
        isNew: true,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Ford',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    },
    {
        id: 2,
        image: Honda1,
        brand: 'Honda',
        model: 'Pilot Touring 7-Passenger',
        title: 'Honda Pilot Touring 7-Passenger',
        price: 43735,
        oldPrice: null,
        location: 'Caracas, Venezuela',
        year: 2021,
        fuel: 'Gasoline',
        drive: 'All-wheel Drive',
        countPassanger: 7,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: true,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Honda',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }

    },
    {
        id: 3,
        image: Chevrolet1,
        brand: 'Chevrolet',
        model: 'Equinox LS',
        title: 'Chevrolet Equinox LS',
        price: 17978,
        oldPrice: null,
        location: 'Madrid, Spain',
        year: 2017,
        fuel: 'Gasoline',
        drive: 'Front-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: true,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Chevrolet',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 4,
        image: Kia1,
        brand: 'Kia',
        model: 'Sorento S',
        title: 'Kia Sorento S',
        price: 29791,
        oldPrice: null,
        location: 'Bangkok, Thailand',
        year: 2021,
        fuel: 'Gasoline',
        drive: 'Front-wheel Drive',
        countPassanger: 7,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: true, characteristics: 
        {
            generalInfo: 
            {
                brand: 'Kia',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 5,
        image: Mini1,
        brand: 'MINI',
        model: 'Clubman Cooper S',
        title: 'MINI Clubman Cooper S',
        price: 35850,
        oldPrice: null,
        location: 'Jakarta, Indonesia',
        year: 2022,
        fuel: 'Gasoline',
        drive: 'Front-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: true,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'MINI',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 6,
        image: Jeep1,
        brand: 'Jeep',
        model: 'Wrangler Unlimited Islander',
        title: 'Jeep Wrangler Unlimited Islander',
        price: 50370,
        oldPrice: null,
        location: 'San Antonio, USA',
        year: 2021,
        fuel: 'Hybrid',
        drive: 'Four-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: false,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Jeep',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 7,
        image: Audi1,
        brand: 'Audi',
        model: 'e-tron Premium',
        title: 'Audi e-tron Premium',
        price: 72655,
        oldPrice: null,
        location: 'Suwon, South Korea',
        year: 2021,
        fuel: 'Electric',
        drive: 'All-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: false,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Audi',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 8,
        image: LandRover1,
        brand: 'Land Rover',
        model: 'Velar R-Dynamic S',
        title: 'Land Rover Velar R-Dynamic S',
        price: 75790,
        oldPrice: null,
        location: 'Jeddah, Saudi Arabia',
        year: 2021,
        fuel: 'Gasoline',
        drive: 'All-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: false,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Land Rover',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }
    
    },
    {
        id: 9,
        image: Toyota1,
        brand: 'Toyota',
        model: 'Mirai',
        title: 'Toyota Mirai',
        price: 71415,
        oldPrice: null,
        location: 'Kobe, Japan',
        year: 2021,
        fuel: 'Electric',
        drive: 'Rear-wheel Drive',
        countPassanger: 5,
        rating: 0,
        vievs: 0,
        ribbonStatus: '',
        compared: false,
        isNew: false,
        characteristics: 
        {
            generalInfo: 
            {
                brand: 'Toyota',
                bodyType: 'SUV',
                color: 'blue'
            },
            engineDetails:
            {
                fuelType: 'gasoline',
                mileage: '120',
                transmission: 'automatic',
                engineCapacity: '3471 cc',
                power: '314hp',
            },
            dimension:
            {
                length:'5700',
                width:'1700',
                height:'1800',
                cargoVolume:'500',
            },
            features:
            {
                powerSteering: true,
                heatedSeats: true,
                usbPort: true,
                ac: true,
                bluetooth: true,
                alarm: true,
                wifi: true,
                cruiseControl: true,
                frontParkingSensor: true,
                roofRack: true,
                powerWindows: true,
                sunroof: true,
                soundSystem: true,
                memorySeat: true,
            }
        }    
    }
];

export default cars