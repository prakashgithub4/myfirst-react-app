import { Children } from "react";
import {Link} from "react-router-dom";

export default function Cake(props){
    console.log(props)
    return (<div style={{display:"inline-block",margin:"0" ,padding:"10px" ,float:"left"}}>
      <Link to={"/cakedetails/"+props.data.cakeid}>
    <div className="card" style={{width: "15rem",marginTop:"0", padding:"0" }}>
    <img src={props.data.image} className="card-img-top" alt="..." style={{height:"100px" }}/>
    <div className="card-body">
      <p className="card-text">{props.data.name}</p>
      <p className="card-text">Rs:{props.data.price}/-</p>

    </div>
  </div>
  </Link>
  
  </div>);
}