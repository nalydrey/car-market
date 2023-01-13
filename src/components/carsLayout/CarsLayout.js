import Nav from '../nav/Nav'
import {Outlet} from 'react-router-dom'

const CarsLayout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
  )
}

export default CarsLayout