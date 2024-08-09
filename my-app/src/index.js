import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Productcontext } from './Components/Context/Productcontext';
// import { CartPrvider } from './Components/Context/Addtocartcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Productcontext>
      {/* <CartPrvider> */}
    <App />
    {/* </CartPrvider> */}
    </Productcontext>
  </React.StrictMode>
);

