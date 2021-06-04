//import querystring from "query-string";
import React,{useState,useEffect} from "react";
import axios from "axios";
import Cake from "../components/Cakes";
import apiurls from "../apiurls";
export default function Search(props){

    let [flag,setFlag]=useState(true);
    let [cakes,setData] = useState([]);
    let query = props.match.params.name;
    useEffect(() => {
    
        axios({method:'get',url:apiurls.url+"searchcakes?q="+query})
        .then((response)=>{
            console.log(response)
            if(response.data.data.length == 0){
                setFlag(true)
            }else{
                setFlag(false);
                setData(response.data.data);
            }
         
         
          },(error)=>{
            console.log(error)
          });
    
    
      });
      let cakeItems = cakes.map(function(item,index){
        return <Cake key={index} data={item} ></Cake>;
      });
   // console.log(props.match.params.name)

   
    return <div>{(!flag)?cakeItems:"No result found"}</div>
}