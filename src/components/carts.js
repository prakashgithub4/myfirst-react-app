import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CartList, Removecart, RemoveAllCart } from "../reduxStore/middlewares";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

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
  let removecarts = (data) => {
    let remove = Removecart(data);
    props.dispatch(remove);
  };
  let removeallcart = () => {
    // alert("ok")
    let removeall = RemoveAllCart(props.token);
    props.dispatch(removeall);
  };
  let total_amount  = 0;
  let maplist = props.cartdata.map((item, index) => {
    total_amount = total_amount+ item.price;
    return (
     
          <tr key={index}>
            <td><Link to={"/cakedetails/"+item.cakeid}>
              <img
                src={item.image}
                style={{ width: "175.645px", height: "99px", margin: "0px" }}
              />{" "}
              </Link><br/><h2>{item.name}</h2><br/>
              <price>
            Price:
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "INR",
              maximumSignificantDigits: 2,
            }).format(item.price)}
          </price>
              </td>
            <td> <button type="button" class="btn btn-danger">-</button>
<input type="text" size="2" value={item.quantity} readOnly /><button type="button" class="btn btn-success">-</button></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>removecarts({cakeid:item.cakeid,token:props.token})}>
            Remove
          </button></td>
          </tr>
         
      
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

        <div className="col-md-4">
          <button
            type="button"
            onClick={removeallcart}
            className="btn btn-primary"
          >
            {" "}
            <i class="fa fa-trash"></i>&nbsp;Remove All
          </button>
        </div>

        <div className="col-md-4">
          <strong>My Cart</strong>
        </div>
      </div>
      {
        (maplist.length!=0)?(<table class="table table-hover">
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
        <tbody>

     {maplist}
     <tr>
      <td colSpan="2"><strong>Total</strong> </td>
      <td>{total_amount} </td>
     </tr>

      </tbody>
      </table>):<EmptyCart />
       
      }
      
      
    </div>
  );
}
function mapStateToProps(state, props) {
  console.log("state", state);
  return {
    token: state.AuthReducer?.token,
    cartlist: state.CartListReducer?.isLoading,
    cartdata: state.CartListReducer?.cartdata,
  };
}
export default connect(mapStateToProps)(Cart);
