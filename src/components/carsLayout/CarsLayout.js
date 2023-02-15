import Nav from '../nav/Nav'
import {Outlet, useParams} from 'react-router-dom'
import Footer from "../Footer/Footer";
import './CarsLayout.scss'
import {ReactComponent as Top} from "../../assets/icons/up.svg";


const CarsLayout = () => {




const toTop = () => {
    window.scrollTo(0, 0)
}

    return (
    <>
        <Nav/>
        <main>
            <Outlet/>
        </main>
            <div className={'toTop'} onClick={toTop}>
                <Top/>
            </div>
        <Footer/>
    </>
  )
}

export default CarsLayout