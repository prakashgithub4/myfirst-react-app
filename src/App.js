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



function App() {
  //console.log(cakes)
  

  
  return (
    <div  className="App">
      
      <div class="container">
     
      <Router>
        
      <Navbar name="prakash"></Navbar>
       <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route path='/*' component={PageNotFound}></Route>
        </Switch>
        <Footer></Footer>
        
      </Router>
     
     
      </div>
    </div>
  );
}

export default App;
