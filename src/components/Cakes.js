import { Children } from "react";
import {Link} from "react-router-dom";

export default function Cake(props){
    console.log(props)
    return (<><div  style={{display:"inline-block",margin:"0" ,padding:"10px" ,float:"left"}}>
      <Link style={{ textDecoration: 'none' }} to={"/cakedetails/"+props.data.cakeid}>
    <div className="card transform" style={{width: "15rem",marginTop:"0", padding:"0" }}>
    <img src={props.data.image} className="card-img-top" alt="..." style={{height:"100px" }}/>
    <div className="card-body">
      <p className="card-text">{props.data.name}</p>
      <p className="card-text">Rs:{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR',maximumSignificantDigits: 2 }).format(props.data.price)}/-</p>
      {/* {props.data.price} */}

    </div>
  </div>
  </Link>
  
  </div></>);
}