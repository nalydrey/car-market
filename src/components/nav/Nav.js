import { Link, NavLink} from 'react-router-dom';
import './Nav.scss'
import logo from './logo.png';



const Nav = () => {



    return(
        <div className='container nav__container'>
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
                <Link className='pre' to='user/login'>Sign in</Link>
                <button className='pre submenu'>En</button>
            </div>
        </div>            
    )
}

export default Nav