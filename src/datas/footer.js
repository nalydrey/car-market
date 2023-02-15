import logo from '../assets/icons/car logo.png'
import {ReactComponent as Facebook} from "../assets/icons/facebook.svg";
import {ReactComponent as Instagram} from "../assets/icons/instagram.svg";
import {ReactComponent as Youtube} from "../assets/icons/youtube.svg";

const footer = {
    logo: logo,
    links: ['about us', 'faq', 'contact'],
    autorization: {
        logIn: 'Login',
        register: 'Register',
    },
    contacts: {
        title: 'Customer service',
        mail: 'info@car.com',
        tel: '240-865-3730',
        adress: '3926 Calvin Street, Baltimore, Maryland, 21201, United State',
        social: {
            facebook: {
                title: 'facebook',
                icon: <Facebook/>,
                link: ''
            },
            instagram: {
                title: 'instagram',
                icon: <Instagram/>,
                link: ''
            },
            youtube: {
                title: 'youtube',
                icon: <Youtube/>,
                link: ''
            }
        }
    },
    copyright: '2023 Autohunt. All Rights reserved',
}

export default footer

