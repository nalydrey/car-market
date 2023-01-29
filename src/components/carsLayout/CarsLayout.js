import Nav from '../nav/Nav'
import {Outlet, useParams} from 'react-router-dom'
import Footer from "../Footer/Footer";


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