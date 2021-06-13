import{useEffect} from 'react';
import {connect} from 'react-redux';
import {MyorderList} from '../reduxStore/middlewares'
 function MyOrders(props){
   useEffect(() => {
     let myorderList =MyorderList(props.token);
     props.dispatch(myorderList)
   }, []);

   function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day,month,year].join('-');
}

   /** Listing my orders */
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
       <li key={index}class="list-group-item myorder-list d-flex justify-content-between align-items-center">
          <div>
           <strong> Order id:</strong>&nbsp;{item.orderid}<br/>
           <strong>Order Placed:</strong>&nbsp;{formatDate(item.orderdate)}<br/>
           <strong>Payment mode</strong>&nbsp;{item.mode}<br/>
           <strong>Total Price</strong>&nbsp;{total}

          
          </div>
          <div>
            <h6>Address info</h6>
            <small><strong>Address:</strong>&nbsp;{item.address}</small><br/>
            <small><strong>City:</strong>&nbsp;{item.city}</small><br/>
            <small><strong>Email:</strong>&nbsp;{item.email}</small><br/>
            <small><strong>Phone:</strong>&nbsp;{item.phone}</small><br/>
          </div>
          
          {cakes}

        </li>
     </>)
   })

    return (<div>


  <div class="row">
    <div class="col-12 col-sm-8 col-lg-12">
      <h1 class="text-muted">My Order list</h1> 
      <ul class="list-group myorder-list">
        {/* <li class="list-group-item myorder-list d-flex justify-content-between align-items-center">
          Don Quixote 
          <div>
            hello
          </div>
          <div class="image-parent">
              <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg" class="img-fluid" alt="quixote"/>
          </div>

        </li> */}
        {data}
       
        
      </ul>
    </div>
  </div>
</div>
   );
}
function mapStateToprops(state,props){
  
  return {
    token:state.AuthReducer?.token,
    orders:state.CartReducer?.orders
  }
}
export default connect(mapStateToprops)(MyOrders)
