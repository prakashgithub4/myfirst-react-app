import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {MyorderList} from '../reduxStore/middlewares'

 function Confirm(props){
  useEffect(() => {
    let myorderList =MyorderList(props.token);
     props.dispatch(myorderList)
    
}, []);
var total_amount = 0;
var total=0;
const data  = props.orders.map((item,index)=>{
      
     
  let cakes= item.cakes.map((item,index)=>{
    total=(total==0)? item.price:total_amount;
    total_amount += item.price;
    
       return (<>
      
       <div class="image-parent">
         <h6>Cake Details</h6>
          <img src={item.image} class="img-fluid" alt="quixote"/>
          <small><strong>Cake Id: </strong>{item.cakeid}</small><br/>
          <small><strong>Name: </strong>{item.name}</small><br/>
          <small><strong>price: </strong>{item.price}</small><br/>
          <small><strong>Weight: </strong>{item.weight}</small><br/>
          <div><button>+</button><input type="text" value={item.quantity} size="1"/><button>-</button></div>
      </div>
      
       </>)
        
  })
 return (<>
   <tr key={index}>
      <td> {cakes}</td>
      <td>
       <strong> Order id:</strong>&nbsp;{item.orderid}<br/>
       <strong>Payment mode</strong>&nbsp;{item.mode}<br/>
      
      
      </td>
      <td>
        <h6>Address info</h6>
        <small><strong>Address:</strong>&nbsp;{item.address}</small><br/>
        <small><strong>City:</strong>&nbsp;{item.city}</small><br/>
        <small><strong>Email:</strong>&nbsp;{item.email}</small><br/>
        <small><strong>Phone:</strong>&nbsp;{item.phone}</small><br/>
      </td>
      
     

    </tr>
 </>)
})
   

    return (<>
      <div>Placed Orders</div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Product </th>
     
      <th scope="col">Order details</th>

      <th scope="col">Address</th>
      
    </tr>
    {data}
    <tr>
      <td>Total</td>
      <td colSpan="2">{total}</td>
    </tr>
  </thead>
  <tbody>
 

 
 
  </tbody>
</table>
      </>)
}
function maptoStateprops(state,props){
  
  return {
    token:state.AuthReducer?.token,
    orders:state.CartReducer?.orders
  }
}
export default connect(maptoStateprops)(Confirm)