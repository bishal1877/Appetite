import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar.jsx';
import Complete from "./component/Complete/Complete.jsx";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Storecontextprovider from './context/Storecontext.jsx';
import Footer from './component/Footer/Footer.jsx';
import Login from './component/Login/Login.jsx';
import Status from './pages/Status/Status.jsx';


const App = () => {

const [showlogin,setshowlogin]=useState(false)

  return (
    <Router>
      <Storecontextprovider>
        {showlogin ? <Login setshowlogin={setshowlogin} /> : <></>}
        <div className="app">
          <Navbar setshowlogin={setshowlogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/status" element={<Status />} />
              <Route path="/complete" element={<Complete />} />
            </Routes>
        </div>
        <Footer />
      </Storecontextprovider>
    </Router>
  );
}

export default App