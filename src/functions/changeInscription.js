
let incscr = [
    { title: 'generalInfo',
      replace: 'general info'
    },
    { title: 'engineDetails',
      replace: 'engine details'
    },
    { title: 'dimension',
      replace: 'dimension details'
    },
    { title: 'features',
      replace: 'features'
    },
    { title: 'bodyType',
      replace: 'body type'
    },
    { title: 'color',
      replace: 'color'
    },
    { title: 'fuelType',
      replace: 'fuel type'
    },
    { title: 'mileage',
      replace: 'mileage'
    },
    { title: 'transmission',
      replace: 'transmission'
    },
    { title: 'engineCapacity',
      replace: 'engine capacity'
    },
    { title: 'power',
      replace: 'power'
    },
    { title: 'length',
      replace: 'length'
    },
    { title: 'width',
      replace: 'width'
    },
    { title: 'height',
      replace: 'height'
    },
    { title: 'cargoVolume',
      replace: 'cargo volume'
    },
    { title: 'powerSteering',
      replace: 'power steering'
    },
    { title: 'heatedSeats',
      replace: 'heated seats'
    },
    { title: 'usbPort',
      replace: 'usb port'
    },
    { title: 'ac',
      replace: 'AC'
    },
    { title: 'bluetooth',
      replace: 'bluetooth'
    },
    { title: 'alarm',
      replace: 'alarm'
    },
    { title: 'wifi',
      replace: 'Wi-Fi'
    },
    { title: 'cruiseControl',
      replace: 'cruise control'
    },
    { title: 'frontParkingSensor',
      replace: 'front prking sensor'
    },
    { title: 'roofRack',
      replace: 'roof rack'
    },
    { title: 'powerWindows',
      replace: 'power windows'
    },
    { title: 'sunroof',
      replace: 'sunroof'
    },
    { title: 'soundSystem',
      replace: 'sound system'
    },
    { title: 'memorySeat',
      replace: 'memory seat'
    }
]

const changeInscription = (key) => {
    console.log(key)
  return incscr.find((el)=>key&&key===el.title).replace
}
export default changeInscription

