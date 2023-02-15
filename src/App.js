import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Compare from './components/pages/compare/Compare';
import Sell from './components/pages/sell/Sell';
import CarsLayout from './components/carsLayout/CarsLayout';
import SearchResult from './components/pages/searchResult/SearchResult';
import Register from "./components/pages/Register/Register";
import Office from './components/pages/Office/Office';
import { LoginForm, RegisterForm } from './components/pages/Register/Forms/Forms';
import Car from './components/pages/car/Car';
import Article from './components/pages/Article/Article';
import { addCollectObj } from './store/actionCreators/actionCreatePageElements';
import axios from 'axios';
import collectData from "./functions/collectData";
import AboutUs from "./components/pages/aboutAs/AboutUs";
import Faq from "./components/pages/Faq/Faq";
import {refreshFaq} from "./store/actionCreators/actionCreateFaq";
import {loadAllCars} from "./store/actionCreators/actionCreate";
import {allowAccess} from "./store/actionCreators/actionCreatorCurrentUser";
import News from "./components/pages/News/News";
import Contacts from "./components/pages/Contacts/Contacts";
import {useSelector} from "react-redux";

// export const url = 'http://localhost:3002/'
export const url = '/';


export const firstLoad = () => {
    axios.get(url+'cars').then(cars=> {
        const collect = collectData(cars.data, ['brand', 'model','year','drive', 'count passenger'])
        const generalColect = collectData(cars.data.map((car)=>car.characteristics['general info']), ['body type', 'color'])
        const engineCollect = collectData(cars.data.map((car)=>car.characteristics['engine details']), ['fuel type', 'transmission'])
        addCollectObj({...collect, ...generalColect, ...engineCollect})
        loadAllCars(cars.data)
    })
    axios.get(url+'faq').then(resp => refreshFaq(resp.data))
}

function App() {
    // console.log('render App')
    const currentUser = useSelector(state => state.currentUser)

    useEffect(()=>{
        firstLoad()
    const userId = localStorage.getItem('loginedUser')
    userId && axios.get(url+`users/${userId}`).then((resp)=>allowAccess(resp.data))
    },[])


  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<CarsLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='new_cars' element={<SearchResult filterNovelty='New'/>}/>
                <Route path='used_cars' element={<SearchResult filterNovelty='Used'/>}/>
                <Route path='search_result' element={<SearchResult radio/>}/>
                <Route path='compare' element={<Compare/>}/>
                <Route path='sell' element={<Sell/>}/>
                <Route path='office/*' element={<Office/>}/>
                <Route path='car/:id' element={<Car/>}/>
                <Route path='user' element={<Register/>}>
                  <Route path='login' element={<LoginForm/>}/>
                  <Route path='register' element={<RegisterForm/>}/>
                </Route>
                <Route path='about us' element={<AboutUs/>} />
                <Route path='faq' element={<Faq/>} />
                <Route path='contact' element={<Contacts userId = {currentUser?.id}
                                                         avatar = {currentUser?.avatar}
                                                         name = {currentUser?.user.firstName}
                                                         email = {currentUser?.contacts.email}
                                                         phone = {currentUser?.contacts.tel}
                                                />}
                />
                <Route path='news' element={<News/>} />
                <Route path='news/:id' element={<Article/>}/>
              </Route>
          </Routes>  
    </BrowserRouter>
  );
}

export default App;



