
import React from 'react'
import { useCommonContext } from '../../AppContext/AppContext';

const Filter = (props) => {
    console.log(props);

    const { allCars } = useCommonContext()
    const { children, isSort=false, isDespending=false, data  } = props

    const filtered = allCars.slice(2,4)
  return (
    <>
        {children}
    </>
  )
}

export default Filter