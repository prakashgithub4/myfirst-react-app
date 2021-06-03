import React,{useState,useEffect} from 'react';
import CarosoleBanner from '../components/Carosole';
import apiurls from '../apiurls';
import axios from 'axios';
import Cake from '../components/Cakes';


export default function Home(props){
    
    let [cakes,setData] = useState([]);
    let [falg,setFlag]=useState(false);
    useEffect(() => {
    
        axios({method:'get',url:apiurls.url+"allcakes",data:JSON})
        .then((response)=>{
          setData(response.data.data)
          setFlag(true)
          },(error)=>{
            console.log(error)
          });
    
    
      },[]);
      let cakeItems = cakes.map(function(item,index){
        return <Cake key={index} data={item} ></Cake>;
      });
   return (<div>
       <CarosoleBanner></CarosoleBanner><div>{cakeItems}</div></div>
       );
}