import React,{useState,useEffect} from 'react';
import apiurl from '../apiurls'
import axios from 'axios';
export default function Myprofile(){
    let token = JSON.parse(window.localStorage.getItem('user'));

    let [useData,setUserData] = useState([]);
    let [flag,setFlag]=useState(true);
    useEffect(()=>{
        axios({
            method:'get',
            url:process.env.REACT_APP_BASE_URL+'/getuserdetails',
            headers:{
            authtoken:localStorage.token
            }})
            .then((response)=>{
            console.log(">>>>>>>>> user",response.data)
            setUserData(response.data.data)
            setFlag(false)
            },(error)=>{
            console.log(error)
            });
    },[]);
    console.log(useData)
    return (

       
        <div class="container-fluid well span6" style={{marginTop:"20px"}}>
            <div class="row-fluid">
                {
                    (!flag)?( <div>
                        <div class="span2" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nJVwq_IH9_hsJ7wGc3QXl0eHZYl78BVHw4xakGCeVDjeszJ5aUzc3uq0rYZLtP7FFiA&usqp=CAU" class="img-circle"/>
                        </div>
                        
                        <div class="span8">
                            <h3>User: {useData.name}</h3>
                            <h6>Email: {useData.email}</h6>
                            <h6>Role: {useData.role}</h6>
                            {/* <h6>Old: 1 Year</h6>
                            <h6><a href="#">More... </a></h6> */}
                        </div>
                        </div>):<div>Loading ....</div>

               
          }
                
                {/* <div class="span2">
                    <div class="btn-group">
                        <a class="btn dropdown-toggle btn-info" data-toggle="dropdown" href="#">
                           Edit
                            <span class="icon-cog icon-white"></span><span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><span class="icon-wrench"></span> Modify</a></li>
                            <li><a href="#"><span class="icon-trash"></span> Delete</a></li>
                        </ul>
                    </div>
                </div> */}
        </div>
        </div>
    )
}