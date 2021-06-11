import React,{useState} from 'react';
import {connect} from 'react-redux';
 function Confirm(props){
    let [name, setName] = useState(null);
    let [address, setAddress] = useState(null);
    let [phone, setPhone] = useState(null);
    let [city, setCity] = useState(null);
    let [pincode, setPincode] = useState(null);
    let [total,setTotal] = useState((props.totalamount ==undefined)?0:props.totalamount);

    let changeName=(event)=>{
      setName(event.target.value)
    }
    let changeAddress=(event)=>{
        setAddress(event.target.value)
      }
      let changePhone=(event)=>{
        setPhone(event.target.value)
      }
      let changeCity=(event)=>{
        setCity(event.target.value)
      }
      let changePincode=(event)=>{
        setPincode(event.target.value)
      }
    //   let changePincode=(event)=>{
    //     setPincode(event.target.value)
    //   }
    let onClickOrderdetails =()=>{
       
        if(name ==null){
            alert("name field is required");
            return false;
        }
        if(address == null){
            alert("address field is required");
            return false;
        }
        if(phone ==null){
            alert("phone number field is required");
            return false;
        }
        if(city == null){
            alert("city field is required");
            return false;
        }
        if(pincode == null){
            alert("city field is required");
            return false;
        }
        let obj={name:name,price:total,address:address,city:city,phone:phone,pincode:pincode,cakes:null}
    }

    return (<>
        <form>
            <center>Order Details</center>
            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="Name" onKeyUp={changeName}/>
            </div>
            </div>
            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="address" placeholder="Address" onKeyUp={changeAddress}/>
            </div>
            </div>
            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Phone No.</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="Phone No." onKeyUp={changePhone}/>
            </div>
            </div>
            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">City</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="City" onKeyUp={changeCity}/>
            </div>
            </div>

            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Pincode</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="Pincode"onKeyUp={changePincode}/>
            </div>
            </div>

            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Total Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="Total Price" value={props.totalamount}/>
            </div>
            </div>

          
           
                 <button type="button" class="btn btn-primary" onClick={onClickOrderdetails}>Confirm</button>

            
          
        </form>
      </>)
}
function maptostateProps(state,props){
    console.log("state=",state)
    if(state.CartListReducer.isConfirmOrder == false){
       props.history.replace('/checkout/summery')
    }else{
        return {
            totalamount:state.CartListReducer?.totalprice
        }
    }
  
}
export default connect(maptostateProps)(Confirm)