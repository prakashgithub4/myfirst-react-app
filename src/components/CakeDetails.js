import React, { useState, useEffect } from "react";
import "../index.css";
import { Link,withRouter } from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

 function CakeDetails(props) {
  let id = props.match.params.cake_id;
  let [data, setData] = useState([]);
  let [flag, setFlag] = useState(true);
  useEffect(() => {
    axios({ method: "get", url: process.env.REACT_APP_BASE_URL + "/cake/" + id, data: JSON }).then(
      (response) => {
        console.log(response);
        setData(response.data.data);
        setFlag(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  let addtocart = (inputparams)=>{
   // console.log(inputparams)
    axios({method:"post",url:process.env.REACT_APP_BASE_URL+"/addcaketocart", headers:{
      authtoken:props.token
      },data:inputparams})
    .then((response)=>{
       console.log(response.data);
       props.dispatch({
         type:"ADD_TO_CART",
         payload:response.data
       });
       props.history.push('/carts')
    },
    (error) => {
      console.log(error);
    });
  }
  if (!flag) {
    return (
      <div class="row" style={{ marginTop: "10px" }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">
                <img src={data.image} class="img-thumbnail" alt="..." />
              </p>
              <price>RS:{data.price}/-</price>
              <div className="row">
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Ratings:</label>
                  &nbsp; &nbsp;
                  <span>{data.ratings}</span>
                </div>
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Review</label>
                  &nbsp; &nbsp;
                  
                  <span>{data.reviews}</span>
                </div>
              </div>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">{data.description}</p>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={()=>addtocart({cakeid:data.cakeid,name:data.name,image:data.image,price:data.price,weight:data.weight})}>
                  <i class="fas fa-cart-arrow-down"></i> Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <Link to="/checkout" className="btn btn-warning">
                    Checkout
                  </Link>
                </div>
              </div>

              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
}
function maptostateProps(state,props){
  console.log(state)
  return {
    token:state.AuthReducer?.token,
    cartdata:state.CartReducer?.cartdata

  }
}
CakeDetails =withRouter(CakeDetails);
export default connect(maptostateProps)(CakeDetails)