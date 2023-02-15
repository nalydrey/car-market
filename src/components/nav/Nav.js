import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import './Nav.scss'
import logo from './logo.png';
import { useSelector } from 'react-redux';
import {useState} from "react";
import {url} from "../../App";
import axios from "axios";
import {addUserId} from "../../store/actionCreators/actionCreateAddCar";
import {allowAccess} from "../../store/actionCreators/actionCreatorCurrentUser";



const Nav = () => {

    const [subMenuStatus, setSubmenu] = useState(false)
    const navigate = useNavigate()

    const location = useLocation()
    const user = useSelector((state)=>state.currentUser)
    let header
    const nameLink = user ? user.user.firstName : 'Sign in'
    const link = user ? '/office': 'user/login'
    location.pathname==='/' && (header={position: 'absolute', transform: 'translate(-50%)'}) 

    const submenu = (e) => {
        e.stopPropagation()
        setSubmenu(!subMenuStatus)
    }
    document.addEventListener('click', ()=>{subMenuStatus && setSubmenu(false)})

    const enterGuest = () => {
        axios.get(url+'users/5').then(resp => {
            addUserId(resp.data.id)
            allowAccess(resp.data)
            navigate('/office')
            localStorage.setItem('loginedUser', JSON.stringify(resp.data.id))
        })
    }


    return(
        <header>
            <div className='container nav__container' style={header}>
                <div>
                    <Link to='.'><img src={logo} alt="logo" /></Link>
                </div>
                <ul className='nav__navigation'>
                    <li><NavLink to='new_cars'>New Cars</NavLink></li>
                    <li><NavLink to='used_cars'>Used Cars</NavLink></li>
                    <li><NavLink to='compare'>Compare</NavLink></li>
                    <li><NavLink to='sell'>Sell</NavLink></li>
                    <li><NavLink to='news'>News</NavLink></li>
                </ul>
                <div className='nav__control'>
                    <Link className='pre' to={link}>{nameLink}</Link>
                    {!user && <button onClick={enterGuest}>Enter as Guest</button>}
                </div>
            </div>            
        </header>
    )
}

export default Nav