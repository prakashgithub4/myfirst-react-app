import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CarosoleBanner from './components/Carosole';
import Container from './components/container';
import Footer from './components/Footer';


function App() {
  return (
    <div  className="App">
      <div class="container">
      <Navbar></Navbar>
      <CarosoleBanner></CarosoleBanner>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
