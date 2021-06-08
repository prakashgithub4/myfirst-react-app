import React,{useState,useEffect} from 'react';
import CarosoleBanner from '../components/Carosole';
import axios from 'axios';
import Cake from '../components/Cakes';


export default function Home(props){
  

    let [cakes,setData] = useState([]);
    let [falg,setFlag]=useState(true);
    useEffect(() => {
    
        axios({method:'get',url:process.env.REACT_APP_BASE_URL+"/allcakes",data:JSON})
        .then((response)=>{
          setData(response.data.data)
          setFlag(false)
          },(error)=>{
            console.log(error)
          });
    
    
      },[]);
      let cakeItems = cakes.map(function(item,index){
        return <Cake key={index} data={item} ></Cake>;
      });
   return (<div>
       <CarosoleBanner></CarosoleBanner><div>{(!falg)?cakeItems:<div>Loading......</div>}</div></div>
       );
}