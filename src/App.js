
import React, {useEffect, useMemo} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Compare from './components/pages/compare/Compare';
import Sell from './components/pages/sell/Sell';
import CarsLayout from './components/carsLayout/CarsLayout';
import SearchResult from './components/pages/searchResult/SearchResult';
import Register from "./components/pages/Register/Register";
import Office from './components/pages/Office/Office';
import store from "./store/store";
import { LoginForm, RegisterForm } from './components/pages/Register/Forms/Forms';
import Car from './components/pages/car/Car';
import Article from './components/pages/Article/Article';
import { allowAccess } from './store/actionCreators/actionCreatePageElements';
import axios from 'axios';


export const url = 'http://localhost:3002/'
// export const url = ''


function App() {
    // console.log('render App')
    
    useEffect(()=>{
        // console.log('load data')
        fetch(url+'cars')
            .then(req => req.json())
            .then(json => {
                // console.log(json)
                store.dispatch({type: 'LOAD_DATA', payload: json})
            })
        
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
                <Route path='article' element={<Article/>}/>
                <Route path='office' element={<Office/>}/>
                <Route path='car/:id' element={<Car/>}/>
                <Route path='user/' element={<Register/>}>
                  <Route path='login' element={<LoginForm/>}/>
                  <Route path='register' element={<RegisterForm/>}/>
                </Route> 
              </Route>
          </Routes>  
    </BrowserRouter>
  );
}

export default App;
