import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import About from "./Pages/About";
import Products from "./Pages/Products";
import SingleProducts from "./Pages/SingleProduct"
import Cart from "./Pages/Cart"
import Error from './Pages/Error';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleproduct/:id" element={<SingleProducts/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error/>}/>

      

    </Routes>
     
    </Router>
  );
}

export default App;
