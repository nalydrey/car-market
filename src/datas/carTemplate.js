import Tesla1 from "../assets/images/cars/Tesla1.jpg";


const carTemplate =
{
    id: 0,
    image: [],
    brand: '',
    model: '',
    title: '',
    price:  null,
    oldPrice: null,
    location:
        {
        country: '',
        state: ''
        },
    year: null,
    fuel: '',
    drive: '',
    countPassanger: null,
    rating: 0,
    vievs: 0,
    ribbonStatus: '',
    compared: false,
    isNew: null,
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
                mileage: null,
            transmission: '',
            engineCapacity: '',
            power: null,
        },
        dimension:
        {
            length:null,
            width:null,
            height:null,
            cargoVolume:null,
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