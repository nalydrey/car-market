
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import NewCars from './components/pages/newCars/NewCars';
import UsedCars from './components/pages/usedCars/UsedCars';
import Compare from './components/pages/compare/Compare';
import Sell from './components/sell/Sell';
import CarsLayout from './components/carsLayout/CarsLayout';
import AppContext from './AppContext/AppContext';





function App() {
  return (
    <BrowserRouter>
      {/* <div> */}
        <AppContext>
          <Routes>
              <Route path='/car-market/' element={<CarsLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='new_cars' element={<NewCars/>}/>
                <Route path='used_cars' element={<UsedCars/>}/>
                <Route path='compare' element={<Compare/>}/>
                <Route path='sell' element={<Sell/>}/>
              </Route>
          </Routes>  
        </AppContext>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
