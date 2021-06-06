import{Link,useRouteMatch,Route,Redirect} from 'react-router-dom';
import Summery from '../components/Summery';
import Confirm from '../components/Confirm';
import Address from '../components/Address';
export default function Checkout(){
  let {path} = useRouteMatch(); // this function is use to match route from app js component
 
   return (
   <div class="row" style={{marginTop:'10px'}}>
   <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
      
         <div className="row">
         <ul class="list-group">
            <li class="list-group-item"><Link to={`${path}`}><Redirect to={`/checkout/summery`}></Redirect></Link></li>
            <li class="list-group-item"><Link to={`${path}/summery`}>Summery</Link></li>
            <li class="list-group-item"><Link to ={`${path}/confirm`}> Confirm</Link></li>
            <li class="list-group-item"><Link to={`${path}/address`}>Address</Link></li>
            
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