import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CarosoleBanner from './components/Carosole';
import Container from './components/container';
import Footer from './components/Footer';
import Login from './components/login';

function getText(){

}
function App() {
  return (
    <div  className="App">
      <div class="container">
      <Navbar name="prakash"></Navbar>
      <CarosoleBanner></CarosoleBanner>
      <Container></Container>
      <Container></Container>
      <Login></Login>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
