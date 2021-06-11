import './style.css';
import '../../src/App.css'
import React,{useState,useEffect} from 'react';
import { Link,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

var string = "";
 function Navbar(props) {
 
 
   let [name,setName]= useState(null);
      var onChangeName = (event)=>{
     //console.log(event.target.value);
      setName(event.target.value)
   }
  var redirect =()=>{
    if(name != null){
      props.history.push('/search?q='+name)
      document.getElementById("myform").reset();
    }
  
  }


  let logout=()=>{
    props.dispatch({
      type:"LOGOUT",
     
    })
    props.history.push('/')
  }
  //let token = JSON.parse(window.localStorage.getItem('user'));
  return (
    <div >
      
    <nav  className="container   navbar text-success navbar-expand-lg navbar-light bg-light " >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../images/neosoft.svg" height="30" width="200"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/contact'} className="nav-link" >
               Contact
              </Link>
            </li>
            
         {(!props.flag)?(<li className="nav-item">
             
             <Link to={'/login'} className="nav-link" >
              Login
             </Link>
           </li>):(  <li className="nav-item dropdown">
            
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               
              </a>
             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={'/myprofile'} className="dropdown-item" >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" onClick={logout}>
                   Logout
                  </Link>
                </li>
              </ul> 
            </li>)
           }
            
          

            
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
               {props.name}
              </a>
            </li> */}
            
           
          </ul>
          <form id="myform" className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyUp={onChangeName}
            />
             <label>{string}</label>
            <button className="btn btn-outline-success" onClick={redirect}type="button" >
              Search
            </button>
            {
             !props.flag && <Link className="btn btn-info" to={'/login'} >
               Login
             </Link>
           
            }

            {
                props.flag &&  <button className="btn btn-danger" type="button" onClick={logout} >
                Logout
              </button>
            }
           
           <Link to={'/carts'} className="btn btn-outline-success"><i class="fa fa-shopping-cart"></i> Cart 0</Link>

           
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
}

 Navbar = withRouter(Navbar);

export default connect((state,ownprops)=>{
  
  return {
    email:state.AuthReducer?.email,
    flag:state.AuthReducer?.flag
  }
})(Navbar);

