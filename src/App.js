import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import CarosoleBanner from './components/Carosole';
import Cake from './components/Cakes';
import Footer from './components/Footer';
import Login from './components/login';
//import cakes from './data';
import apiurls from './apiurls';
import axios from 'axios';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Content from "./components/Content";
import Home from "./components/home";
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import CakeDetails from './components/CakeDetails';
import Search from './components/Search';
import Checkout from './components/Checkout';
import Logout from './components/Logout';
import Myprofile from './components/myprofile';
import Cart from './components/carts';
import { Suspense } from 'react';


function App() {
  //console.log(cakes)
  
  
  
var cart = React.lazy(()=>import('./components/carts'));
cart=<Suspense fallback={<div>Loading ..</div>}><Cart></Cart></Suspense>
  
  return (
    <div  className="App">
      
      <div class="container">
     
      <Router>
        
      <Navbar name={"praksh"} ></Navbar>
       <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route  path ="/checkout" component={Checkout}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/cakedetails/:cake_id' component={CakeDetails}></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route exact path='/logout' component ={Logout}></Route>
        <Route exact path='/carts' component ={Cart}></Route>
        
        <Route exact path='/myprofile' component ={Myprofile}></Route>
        <Route path='/*' component={PageNotFound}></Route>
        </Switch>
        {/* <Footer></Footer> */}
        
      </Router>
     
     
      </div>
    </div>
  );
}

export default App;
