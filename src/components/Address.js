import { useState,useEffect } from "react";
import {connect} from "react-redux";
import { CartList,AddOrder } from "../reduxStore/middlewares";

 function Address(props) {
   
  let [names, setNames] = useState(null);
  let [address, setAddress] = useState(null);
  let [phone, setPhone] = useState(null);
  let [city, setCity] = useState(null);
  let [pincode, setPincode] = useState(null);
  let [nameerr,setNameErr]=useState(false)
  let [addresserr,setAddressErr] = useState(false)
  let [phoneErr,setPhoneErr] = useState(false);
  let [invalid,setInvalid] = useState(false)
  let [cityErr,setCityErr] = useState(false);
  let [pincodeErr,setPincodeError]=useState(false)

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
   // var validRegex =/^\d{4}$|^\d{6}$/;
      if(names == null){
          //alert("name field is required");
          setNameErr(true)
         // return false;
      }
      if(address == null){
         // alert("address field is required")
         setAddressErr(true)
         // return false;
      }
      if(phone == null){
        setPhoneErr(true)
         // return false;
      }else if(phone.length >10){
       
        setInvalid(true)
      //  return false;
      }
      if(city == null){
        setCityErr(true)
        //  return false;
      }
      if(pincode == null){
        setPincodeError(true)
         // return false;
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
      //console.log("submit",obj)
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
          {nameerr&&<small>Name Field is required</small>}
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
        {addresserr&&<small>address field is required</small>}
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
          {
            phoneErr&&<small>Phone No field is required</small>
          }
          {
            invalid&&<small>phone number field is invalid</small>
          }
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
        {
          cityErr&&<small>City Field is require</small>
        }
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
          {
            pincodeErr&&<small>Pincode field is required</small>
          }
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
