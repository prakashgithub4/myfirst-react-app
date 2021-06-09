import React,{useState,useEffect} from 'react';
import apiurl from '../apiurls'
import axios from 'axios';
import { connect } from 'react-redux';
 function Myprofile(props){
    let token = JSON.parse(window.localStorage.getItem('user'));

    let [useData,setUserData] = useState([]);
    let [flag,setFlag]=useState(true);
    useEffect(()=>{
        axios({
            method:'get',
            url:process.env.REACT_APP_BASE_URL+'/getuserdetails',
            headers:{
            authtoken:props.token
            }})
            .then((response)=>{
         
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
                
               
        </div>
        </div>
    )
}
function mapStateToProps(state,props){
    //console.log(state)
    return{
        token:state.AuthReducer?.token
    }
}
export default connect(mapStateToProps)(Myprofile);