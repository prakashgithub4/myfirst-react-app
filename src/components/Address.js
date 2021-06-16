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
  let [counter,setCounter] =useState(true)

  useEffect(() => {
    
      props.dispatch(CartList(props.token));
    
  }, []);
  
  let handleInput = (event) => {
    let { name, value } = event.target;
    if (name == "name") {
      setCounter(false)
      setNames(value);
    } else if (name == "address") {
      setCounter(false)
      setAddress(value);
    } else if (name == "phone") {
      setCounter(false)
      setPhone(value);
    } else if (name == "city") {
      setCounter(false)
      setCity(value);
    } else if (name == "pincode") {
      setCounter(false)
      setPincode(value);
    }else if(props.total_amount){
      setCounter(false)
    }else{
      setCounter(true)
    }
   
  }
  let onSubmit = ()=>{
   // var validRegex =/^\d{4}$|^\d{6}$/;
      if(names == null){
          //alert("name field is required");
          setCounter(false)
          setNameErr(true)
         // return false;
      }
      if(address == null){
         // alert("address field is required")
         setAddressErr(true)
         setCounter(false)
         
         // return false;
      }
      if(phone == null){
        setPhoneErr(true)
        setCounter(false)
         // return false;
      }else if(phone.length >10){
       
        setInvalid(true)
        setCounter(false)
      //  return false;
      }
      if(city == null){
        setCityErr(true)
        setCounter(false)
        //  return false;
      }
      if(pincode == null){
        setPincodeError(true)
        setCounter(false)
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
          price:props.total_amount
          
    
      }
      
      let addorder = AddOrder(obj,props)
      props.dispatch(addorder)
     // props.history.push('/checkout/confirm')
     
  }
  console.log("submit",props.total_amount)


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

      <button type="button"  class="btn btn-danger" onClick={onSubmit} disabled={counter}>
      <i class="fa fa-check-circle"></i>&nbsp;Confirm
      </button>
    </form>
  );
}
function mapToStateProps(state,props){
    if(state.CartListReducer.totalprice){
      return{
        cartdata:state.CartListReducer?.cartdata,
        token: state.AuthReducer?.token,
        total_amount :state.CartListReducer?.totalprice
    }
    }else{
      props.history.push('/checkout/summery')
    }
   
}
export default connect(mapToStateProps)(Address)
