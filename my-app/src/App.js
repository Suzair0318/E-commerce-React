
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Products } from './Components/Products';
import { Contact } from './Components/Contact';
import { Singleproduct } from './Components/Singleproduct';
import { Cart } from './Components/Cart';
import { Error } from './Components/Error';

function App() {
  return (
   <>
   <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Singleproduct/:id" element={<Singleproduct/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
