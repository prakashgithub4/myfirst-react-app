import { useState,useEffect } from "react";
import {connect} from "react-redux";
import { CartList,AddOrder } from "../reduxStore/middlewares";

 function Address(props) {
   
  let [names, setNames] = useState(null);
  let [address, setAddress] = useState(null);
  let [phone, setPhone] = useState(null);
  let [city, setCity] = useState(null);
  let [pincode, setPincode] = useState(null);

  useEffect(() => {
    if (props.token == undefined) {
      alert("please login first");
      props.history.push("/");
    } else {
      props.dispatch(CartList(props.token));
    }
  }, []);
  
  let handleInput = (event) => {
    let { name, value } = event.target;
    if (name == "name") {
      setNames(value);
    } else if (name == "address") {
      setAddress(value);
    } else if (name == "phone") {
      setPhone(value);
    } else if (name == "city") {
      setCity(value);
    } else if (name == "pincode") {
      setPincode(value);
    }
  }
  let onSubmit = ()=>{
      if(names == null){
          alert("name field is required");
          return false;
      }
      if(address == null){
          alert("address field is required")
          return false;
      }
      if(phone == null){
          alert("phone number field is required")
          return false;
      }else if(phone.length >10){
        alert("phone number field is invalid");
        return false;
      }
      if(city == null){
          alert("city field is required ");
          return false;
      }
      if(pincode == null){
          alert("pincode field is required");
          return false;
      }
     
      let obj = {
          name:names,
          address:address,
          phone:phone,
          city:city,
          pincode:pincode,
          cakes:props.cartdata,
          token:props.token,
          price:props.totalprice
          
    
      }
      let addorder = AddOrder(obj,props)
      props.dispatch(addorder)
     // props.history.push('/checkout/confirm')
     
  }



  return (
    <form className="form-decoration">
      <center>Order Details</center>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Name<small style={{color:"red"}}>*</small>
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="name"
            class="form-control"
            id="inputPassword"
            placeholder="Name"
            onChange={handleInput}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Address <small style={{color:"red"}}>*</small>
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="address"
            class="form-control"
            id="address"
            placeholder="Address"
            onChange={handleInput}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Phone No.<small style={{color:"red"}}>*</small>
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="phone"
            class="form-control"
            id="inputPassword"
            placeholder="Phone No."
            onChange={handleInput}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          City <small style={{color:"red"}}>*</small>
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="city"
            class="form-control"
            id="inputPassword"
            placeholder="City"
            onChange={handleInput}
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Pincode<small style={{color:"red"}}>*</small>
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            name="pincode"
            id="inputPassword"
            placeholder="Pincode"
            onChange={handleInput}
          />
        </div>
      </div>

      <button type="button" class="btn btn-danger" onClick={onSubmit} >
      <i class="fa fa-check-circle"></i>&nbsp;Confirm
      </button>
    </form>
  );
}
function mapToStateProps(state,props){
    console.log("state",state)
   return{
       cartdata:state.CartListReducer?.cartdata,
       token: state.AuthReducer?.token,
       total_amount :state.CartListReducer?.totalprice
   }
}
export default connect(mapToStateProps)(Address)
