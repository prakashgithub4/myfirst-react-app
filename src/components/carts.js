import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CartList,Removecart,RemoveAllCart } from "../reduxStore/middlewares";
import{Link} from 'react-router-dom';

//import axios from 'axios';
function Cart(props) {
  useEffect(() => {
    if (props.token == undefined) {
      alert("please login first");
      props.history.push("/");
    } else {
      props.dispatch(CartList(props.token));
    }
  }, []);
  let removecarts = (data)=>{
    let remove = Removecart(data);
    props.dispatch(remove)
    

  }
  let removeallcart = ()=>{
   // alert("ok")
    let removeall = RemoveAllCart(props.token);
    props.dispatch(removeall)
  }
  let maplist = props.cartdata.map((item, index) => {
  
    return (
      <div class="list-group" key={index}>
        <a
         
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              <Link to={"/cakedetails/"+item.cakeid}>
              <img
                src={item.image}
                style={{ width: "175.645px", height: "99px", margin: "0px" }}
              />{" "}
              </Link>
              <h2>{item.name}</h2>
            </h5>

            <label>
              Quantity:
              <input type="text" value={item.quantity} readOnly />
            </label>
          </div>
          <price>
            Price:
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "INR",
              maximumSignificantDigits: 2,
            }).format(item.price)}
          </price>

          <p>Weight:{item.weight}</p>
          <button type="button" className="btn btn-danger" onClick={()=>removecarts({cakeid:item.cakeid,token:props.token})}>
            Remove
          </button>
        </a>
      </div>
    );
  });

  return (
    <div>
      <center>
        <h2>Cart List</h2>
      </center>
        <div className="row">
          <div className="col-md-4">
          <Link to="/checkout" className="btn btn-danger">
          <i class="fa fa-shopping-bag"></i>&nbsp; Checkout
          </Link>
          </div>

         

          <div  className="col-md-4">
           <button type='button' onClick={removeallcart} className="btn btn-primary"> <i class="fa fa-trash"></i>&nbsp;Remove All</button>
          </div>


          <div  className="col-md-4">
           <strong>My Cart</strong>
          </div>
        </div>
               
      {maplist}
    </div>
  );
}
function mapStateToProps(state, props) {
  console.log("state",state);
  return {
    token: state.AuthReducer?.token,
    cartlist: state.CartListReducer?.isLoading,
    cartdata: state.CartListReducer?.cartdata,
  };
}
export default connect(mapStateToProps)(Cart);
