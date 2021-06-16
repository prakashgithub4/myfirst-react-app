import React, { useState, useEffect } from "react";
import "../index.css";
import { Link,withRouter } from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

import {AddToCart} from '../reduxStore/middlewares'
import {cakeDetails} from '../reduxStore/middlewares';
import StarRatings from 'react-star-ratings';
import Cake from '../components/Cakes';
import ClipLoader from "react-spinners/ClipLoader";


 function CakeDetails(props) {
  // console.log(">>>>>>>>>>>>> store",props.data.data)
  let id = props.match.params.cake_id;
  
  useEffect(() => {
    props.dispatch(cakeDetails({id:id}))
   
    axios({
      url: process.env.REACT_APP_BASE_URL +'/cake/'+id,
      method: 'get'
  }).then(res => {
      let cakeList = res.data.data
      props.dispatch({
        type:"RELATED_CAKES_FETCH_STARTED",
        payload:{query:cakeList.flavour}
      });
  }, err => {})
   
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
  }, [id]);
  console.log()

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
                  <label>Total Ratings: </label>
                  

                 
                  <span>{props.data.data.ratings}</span>
                 <span>
                  <StarRatings
                    rating={props.data.data.ratings}
                    starRatedColor="red"
                   // changeRating={this.changeRating}
                   starDimension="22px"
                   starSpacing="1px"
                    numberOfStars={5}
                    name='rating'
                   />
                   </span>
                  </div>
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Review </label>
                  &nbsp; &nbsp;
                  <i class="fa fa-thumbs-up"></i>
                 
                  
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

                <p><label>Flavour:</label>&nbsp;{props.data.data.flavour}</p>
                
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
        <div>
          <h1>Related Cakes</h1>
          {
            (props.related.data !=undefined)?props.related.data.map(function(item,index){
              return <Cake key={index} data={item} ></Cake>
            }):null
          }
         
        </div>
        
      </div>
    );
  } else {
    return <ClipLoader color={"balck"} loading={true} size={150} />;
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
      flag:state.CakeReducer?.isLoading,
      related:state.CakeReducer?.related
    }
  }
  
}
CakeDetails =withRouter(CakeDetails);
export default connect(maptostateProps)(CakeDetails)