import React,{useEffect} from 'react';
import { CartList,OrderDtails } from "../reduxStore/middlewares";
import {connect} from 'react-redux';
import{useRouteMatch} from 'react-router-dom';

 function Summery(props){
    let {path} = useRouteMatch(); 

    useEffect(() => {
        let carts = CartList(props.token)

       
            props.dispatch(carts)
        
    }, []);
   let sendToPlaceorder =(data)=>{
     let orderDetails = OrderDtails(data)
     props.dispatch(orderDetails);
     props.history.push('/checkout/address');
    }
    var sum =0;
    let maplist = props.cartdata.map((item,index)=>{
        //console.log("List",item)
         sum+=item.price;
        return (
          <tr key={index}>
            <td><img src={item.image} height="80" width="80"className="img-thumbnail"/></td>
           
            <td>{item.quantity}</td>

            <td>{item.price}</td>
            
        </tr>
        );
        sum++
    })
    
    return (<>
    <div>Order details</div>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Product </th>
     
      <th scope="col">Quantity</th>

      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
  {maplist}

  <tr>
      <th scope="col"><i class="fa fa-truck"></i> Deliver Charges:42 </th>
     
      <th scope="col"><button type="button" className="btn btn-primary" onClick={()=>sendToPlaceorder({sum})}>Confirm</button></th>

      <th scope="col">Total :{sum} </th>
      
    </tr>
 
  </tbody>
</table>
    
    </>)
}
function mapStateToProps(state,props){
   
    return {
        token:state.AuthReducer?.token,
        cartlist: state.CartListReducer?.isLoading,
        cartdata: state.CartListReducer?.cartdata,
    }
}
export default connect(mapStateToProps) (Summery);