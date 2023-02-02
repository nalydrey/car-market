import { Link, NavLink, useLocation} from 'react-router-dom';
import './Nav.scss'
import logo from './logo.png';
import { useSelector } from 'react-redux';



const Nav = () => {

    const location = useLocation()
    const user = useSelector((state)=>state.pageElements.currentUser)
    console.log(user);
    let header
    const nameLink = user ? user.user.firstName : 'Sign in'
    const link = user ? '/office': 'user/login'
    location.pathname==='/' && (header={position: 'absolute', transform: 'translate(-50%)'}) 


    return(
        <header>
            <div className='container nav__container' style={header}>
                <div>
                    <Link to='.'><img src={logo} alt="logo" /></Link>
                </div>
                <div className='nav__navigation'>
                    <NavLink to='new_cars'>New Cars</NavLink>
                    <NavLink to='used_cars'>Used Cars</NavLink>
                    <NavLink to='compare'>Compare</NavLink>
                    <NavLink to='sell'>Sell</NavLink>
                    <NavLink className='submenu' to='article'>Article</NavLink>
                </div>
                <div className='nav__control'>
                    <Link className='pre' to={link}>{nameLink}</Link>
                    <button className='pre submenu'>En</button>
                </div>
            </div>            
        </header>
    )
}

export default Nav