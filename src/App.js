import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CarosoleBanner from './components/Carosole';
import Cake from './components/Cakes';
import Footer from './components/Footer';
import Login from './components/login';
import cakes from './data';



function App() {
  //console.log(cakes)
  let cakeItems = cakes.map(function(item,index){
    return <Cake key={index} data={item} ></Cake>;
  });
  console.log(cakeItems)
  
  return (
    <div  className="App">
      <div class="container">
      <Navbar name="prakash"></Navbar>
      <CarosoleBanner></CarosoleBanner>
      {/* <div style={{listStyle:"none",float:"left"}}> */}
      <div style={{display:"inline-block", }} >
      {cakeItems}
     </div>
      <Login></Login>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
