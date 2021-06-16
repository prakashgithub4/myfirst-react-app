import React,{useState,useEffect} from 'react';
import CarosoleBanner from '../components/Carosole';
import axios from 'axios';

import Cake from '../components/Cakes';
import ReactPaginate from 'react-paginate';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


export default function Home(props){
  

    let [cakes,setData] = useState([]);
    let [falg,setFlag]=useState(true);
    const [offset, setOffset] = useState(0); /** set offset state */
   // const [data, setData] = useState([]);
    const [perPage] = useState(20); /** set page size using this state */
    const [pageCount, setPageCount] = useState(0) /** counting the numbers of pages */

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };
    useEffect(() => {
    
        axios({method:'get',url:process.env.REACT_APP_BASE_URL+"/allcakes",data:JSON})
        .then((response)=>{
         
          setData(response.data.data)
          //get length from api data
          setPageCount(Math.ceil(response.data.data.length / perPage))   /** calculating how maney pages will be display */
        
          setFlag(false)
          },(error)=>{
            console.log(error)
          });
    
    
      },[offset]);
      const slice = cakes.slice(offset, offset + perPage)     /** manage how many pages will be display add of set with total number of page */
      let cakeItems = slice.map(function(item,index){
       
        return <Cake key={index} data={item} ></Cake>;
        
      });
     
   //  
 
   return (<div>
       <CarosoleBanner></CarosoleBanner>
       <div className="home-grid">
         {(!falg)?cakeItems: <ClipLoader color={"balck"} loading={true} size={150} />}
        
       </div>
       <div>
         {
      (!falg) ?(<ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      ):null
         }
                </div>
                
         
       </div>
      
       );
}