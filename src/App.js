import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import ContectUs from './ContectUs';
import Feedback from './Feedback';

//import image from '../src/image.jpg';
const App = ()=>{
  return(
    <>
    <Navbar/>
      <Routes>
          <Route exact path="*" element={<Home/>} />
          <Route exact path="/Services" element={<Services/>} />
          <Route exact path="/contectus" element={<ContectUs/>} />
          <Route exact path="/feedback" element={<Feedback/>} />
      </Routes>
   </>
  )
} 
    

      


export default App;