import Nav from '../nav/Nav'
import {Outlet, useParams} from 'react-router-dom'
import Footer from "../Footer/Footer";
import './CarsLayout.scss'


const CarsLayout = () => {






    return (
    <>
        <Nav/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default CarsLayout