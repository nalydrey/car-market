import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import footer from "../../../datas/footer";
import './Register.scss'

const Register = (props) => {

    const params = useLocation()
    const path = params.pathname.split('/')
    const pageName = path[path.length-1] 

    return (
        <section className='registration'>
            <div className='container'>
               
               <div className={`form__wrap ${pageName}`}>
                <Outlet/>
                {pageName==='login' && <p>Don't have an account? <Link to='register'>Login here</Link> </p>}    
                {pageName==='register' && <p>Already have an account? <Link to='login'>Login here</Link> </p>}    
               </div>
                <div className='welcome'>
                    <div className='welcome__box'>
                        <div className='welcome__logo'>
                            <Link><img src={footer.logo} alt=""/></Link>
                        </div>
                        <div>
                            <h2>{pageName}</h2>
                            <p>Welcome to Autohunt</p>
                        </div>
                        <ul className='social__list'>
                            {Object.values(footer.contacts.social).map((social)=>{
                                return (
                                    <li className='social__item' key={social.title}>{social.icon}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;

