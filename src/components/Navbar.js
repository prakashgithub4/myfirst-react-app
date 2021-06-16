import "./style.css";
import "../../src/App.css";
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { CartList, MyorderList } from "../reduxStore/middlewares";

var string = "";
function Navbar(props) {
  let localEmail = localStorage.email;
 
  useEffect(() => {
    props.dispatch(CartList(props.token));
    props.dispatch(MyorderList(props.token));
  }, []);

  let [name, setName] = useState(null);

  var onChangeName = (event) => {
    setName(event.target.value);
  };
  var redirect = () => {
    setTimeout(function () {
      props.history.push("/search?q=" + name);
    }, 1000);
  };

  let logout = () => {
    props.dispatch({
      type: "LOGOUT",
    });
    props.history.push("/");
  };
  console.log(props);
  //let token = JSON.parse(window.localStorage.getItem('user'));
  return (
    <div>
      <nav className="container   navbar text-success navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <h3>Cake Shop</h3>
          </Link>

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
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {/** localEmail */}
              {localEmail == 'prakashmca577@gmail.com' || localEmail == 'ashu.lekhi0540@gmail.com' ? (
                <li className="nav-item">
                  <Link to="/admin" className="nav-link" aria-current="page">
                    <i class="fa fa-users"></i>
                  </Link>
                </li>
              ) : null}

              {/* <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li> */}
              {!props.flag && (
                <Link className="btn btn-info" to={"/login"}>
                  Login
                </Link>
              )}

              {props.flag && (
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>
              )}

              {/* {(!props.flag)?(<li className="nav-item">
             
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
            
           */}

              {/* <li className="nav-item">
              <a className="nav-link" href="#">
               {props.name}
              </a>
            </li> */}
            </ul>
            <form id="myform" className="d-flex">
              <input
                className=" search-nav form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onChangeName}
              />
              <label>{string}</label>
              <button type="button"   className=" searching btn btn-outline-success" onClick={redirect}>
                <i class="fa fa-search"></i>
              </button>
             
          {
         props.flag&& <Link to="/carts">
            <span className="badge">
              {props.count_cart == null ? 0 : props.count_cart.length}
            </span>
            <i className="fa fa-shopping-cart"></i>
          </Link>
          }
              {
                props.flag && <Link to={"/myorders"}>
                <span className="badge">
                  {props.count_orders == null ? 0 : props.count_orders.length}
                </span>
                <i class="fa fa-shopping-bag"></i>
              </Link>
              }
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar = withRouter(Navbar);

export default connect((state, ownprops) => {
  return {
    email: state.AuthReducer?.email,
    flag: state.AuthReducer?.flag,
    role: state.AuthReducer?.role,
    token: state.AuthReducer?.token,
    count_cart: state.CartListReducer?.cartdata,
    count_orders: state.CartReducer?.orders,
  };
})(Navbar);
