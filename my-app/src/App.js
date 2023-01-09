import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

import { Login } from './app/Login/Login'
// import { Shop } from './app/Shop';
import { Customer } from './app/Customer';
import { Cart } from './app/Cart_Order/Order'



function App() {
  return (
    <div className="App" style={{ backgroundColor: 'yellow',height: "200%" }}>
      <div style={{ backgroundColor: '#fffae6' }}>
        <Header></Header>
        {/* '#fffae6' */}
        <NavBar></NavBar>
        <div style={{ minHeight: "800px" }}>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>

      </div>

    </div>
  );
}

export default App;
