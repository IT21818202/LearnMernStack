import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import ProductList from "./components/productList.component";
import UserProfile from "./components/profile.component";
import Cart from "./components/cart.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
      
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/user-profile' element={<UserProfile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
