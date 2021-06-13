import{Link,useRouteMatch,Route,Redirect,useLocation} from 'react-router-dom';
import Summery from '../components/Summery';
import Confirm from '../components/Confirm';
import Address from '../components/Address';


export default function Checkout(){
  
  let {path} = useRouteMatch(); // this function is use to match route from app js component
  let getCurrentRoute = useLocation();
  let routename = getCurrentRoute.pathname.split('/');

   return (
   <div class="row" style={{marginTop:'10px'}}>
   <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
      
         <div className="row">
         <ul class="list-group">
            {/* <li class="list-group-item "><Link to={`${path}`}><Redirect to={`/checkout/summery`}></Redirect></Link></li> */}
            {/* <li className={(routename[2] =="summery")?"list-group-item active":"list-group-item"}><Link to={`${path}/summery`}>Order Summery</Link></li> */}
            <li className={(routename[2] =="summery")?"list-group-item active":"list-group-item"}><Link >Order Summery</Link></li>
            <li class={(routename[2] =="address")?"list-group-item active":"list-group-item "}><Link>Address</Link></li>
            <li class={(routename[2] =="confirm")?"list-group-item active":"list-group-item "}><Link >Place Order</Link></li>
            
            
         </ul>
          

         </div>
         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
       </div>
     </div>
   </div>
   <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
         <Route exact path={'/checkout/'}><Redirect to={'/checkout/summery'}/></Route>   
         <Route exact path="/checkout/summery" component={Summery}></Route> 
         <Route exact path="/checkout/confirm" component={Confirm}></Route> 
         <Route exact path="/checkout/address" component={Address}></Route> 
       </div>
     </div>
   </div>
 </div>
 );
}