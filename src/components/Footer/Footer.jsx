import React from 'react'
import footer from "../../datas/footer";
import {Link} from "react-router-dom";
import './Footer.scss'

// console.log(Object.keys)
const Footer = () => {

    return (
        <footer className='footer'>
                <div className='footer__logo'>
                    <Link to='.'><img src={footer.logo} alt="logo"/></Link>
                </div>
            <div className='gradient-border'></div>
            <div className='container footer__container'>
                <nav className='footer__nav'>
                    <ul className='footer__list'>
                        {footer.links.map((link)=>{
                            return <li key={link}>{link}</li>
                        })}
                    </ul>
                </nav>
                <ul className='footer__contacts'>
                    {Object.values(footer.contacts).map((val, ind)=>{
                        return typeof val === 'string' && ind < 3 &&<li key={ind}>{val}</li>
                    })}
                </ul>
                <div className='footer__social'>
                    <p>{footer.contacts.adress}</p>
                    <ul className='social__list'>
                        {Object.values(footer.contacts.social).map((social)=>{
                            return (
                                <li className='social__item' key={social.title}>{social.icon}</li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className='gradient-border'></div>
                <p className='copyright'>{footer.copyright}</p>
        </footer>
    );
};

export default Footer;