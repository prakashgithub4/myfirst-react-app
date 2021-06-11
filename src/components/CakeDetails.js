import React, { useState, useEffect } from "react";
import "../index.css";
import { Link,withRouter } from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {AddToCart} from '../reduxStore/middlewares'
import {cakeDetails} from '../reduxStore/middlewares';


 function CakeDetails(props) {
  // console.log(">>>>>>>>>>>>> store",props.data.data)
  let id = props.match.params.cake_id;
  
  useEffect(() => {
    props.dispatch(cakeDetails({id:id}))
    // axios({ method: "get", url: process.env.REACT_APP_BASE_URL + "/cake/" + id, data: JSON }).then(
    //   (response) => {
    //     console.log(response);
    //     setData(response.data.data);
    //     setFlag(false);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }, []);

  let addtocart = (inputparams)=>{
   // console.log(inputparams)
   if(inputparams.token!=undefined){
    let addtocart = AddToCart(inputparams);
     props.dispatch(addtocart);
   }else{
     alert("please Login First then use cart")
   }
  
   //props.history.push('/carts')
       
   
  }
  if (!props.flag) {
    return (
      <div class="row" style={{ marginTop: "10px" }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{props.data.data.name}</h5>
              <p class="card-text">
                <img src={props.data.data.image} class="img-thumbnail" alt="..." />
              </p>
              <price>RS:{props.data.data.price}/-</price>
              <div className="row">
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Ratings:</label>
                  &nbsp; &nbsp;
                  <span>{props.data.data.ratings}</span>
                </div>
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Review</label>
                  &nbsp; &nbsp;
                  
                  <span>{props.data.data.reviews}</span>
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
              <p class="card-text">{props.data.data.description}</p>
              <div class="flavour">
                <h6>Product Details</h6>
                <p><label>type:&nbsp;</label>{props.data.data.type}</p>

                <p><label>Flavour:</label>&nbsp;{props.data.data.type}</p>
                
              </div>
              
              <div className="row">
              
                <div className="col-md-6">

                  <button className="btn btn-danger" onClick={()=>addtocart({cakeid:props.data.data.cakeid,name:props.data.data.name,image:props.data.data.image,price:props.data.data.price,weight:props.data.data.weight,token:props.token})}>
                  <i class="fa fa-cart-plus">&nbsp;</i>Add to Cart
                  </button>
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
  console.log("state",state.CakeReducer.cakes);
  if(state.CartReducer.isLoading == false){
    props.history.push('/carts')
  }else{
    return {
      token:state.AuthReducer?.token,
      cartdata:state.CartReducer?.cartdata,
      data:state.CakeReducer?.cakes,
      flag:state.CakeReducer?.isLoading
    }
  }
  
}
CakeDetails =withRouter(CakeDetails);
export default connect(maptostateProps)(CakeDetails)