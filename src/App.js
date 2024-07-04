
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from '../src/Pages/Shop';
import Product from '../src/Pages/Product';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png';
import men_banner from './Components/Assets/banner_mens.png';
import kid_banner from './Components/Assets/banner_kids.png';
import backgroundImage from './Components/Assets/hero_image.png'


function App() {
  const backgroundStyle = {
    width: '100%',
    height: '100vh', // Adjust the height as needed
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ensures the image covers the entire element
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  };
  return (
    <div style ={backgroundStyle}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>} />
        <Route path = '/womens' element = {<ShopCategory  banner={women_banner} category= "women"/>} />
        <Route path = '/mens' element = {<ShopCategory banner= {men_banner} category = "men"/>} />
        <Route path = '/kids' element = {<ShopCategory banner= {kid_banner} category = "kid"/>} />
        <Route path = "product" element={<Product/>}>
        <Route path = ':productId' element = {<Product />}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/login' element = {<LoginSignup/>} />
      </Routes>
      <Footer />     
      </BrowserRouter>
    </div>
  );
}

export default App;
