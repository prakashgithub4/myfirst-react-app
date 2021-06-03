
import React,{useState,useEffect} from 'react'
import apiurls from '../apiurls';
import axios from 'axios';
export default function Register() {
   let [name,setName] = useState(null);
   let [email,setEmail]=useState(null);
   let [password,setPassword]=useState(null);
   let [message,setMessage]=useState(null);
   let [flag,setFlag]=useState(false);
   let getName = (event)=>{
      setName(event.target.value)
      
   }
  let getEmail =(event)=>{
      setEmail(event.target.value);
  }
  let getPassword =(event)=>{
    setPassword(event.target.value);
}
 let onSubmit=()=>{
    var validRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email == "") {
    setFlag(true)
  } else if (!email.match(validRegex)) {
    setFlag(true)
  } else{
      setFlag(false)
  }
  if(name == ''){
    setFlag(true)
  }else{
      setFlag(false)
  }
  if(password == ''){
      setFlag(true)
  }else{
      setFlag(false)
  }
  if(flag==true){
      setMessage('Please fill this form properly');
  }else{
    axios({method:'post',url:apiurls.url+"register",data:{
        name:name,
        email:email,
        password:password
    }})
    .then((response)=>{
        setMessage(response.data.message);
     
      },(error)=>{
        console.log(error)
      });
  }
 }
  return (
    <div>
        <h2>Registration</h2>
        {message}
      <form>
      <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onKeyUp ={getName}
            placeholder="Enter name"
          />
          
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            onKeyUp={getEmail}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onKeyUp={getPassword}
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check"> 
        </div>
        <button type="button" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
