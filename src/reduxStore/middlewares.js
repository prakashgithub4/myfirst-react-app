
import axios from 'axios';
export function loginMiddlware(data){
    return (dispatch)=>{
       dispatch({
           type:"LOGIN_STARTED"
       })

       axios({method:'post',url:process.env.REACT_APP_BASE_URL+"/login",data:{
    
        email:data.email,
        password:data.password
    }})
    .then((response)=>{
        console.log(response.data)
       if(response.data.token){
         let obj = {token:response.data.token,name:response.data.name,email:response.data.email,flag:true}
         dispatch({
           type:"LOGIN_SUCCESS",
           payload:obj
         });
         localStorage.token = response.data.token;
        
       
       }else{
        // this.setState({
        //   flag:false
        //  })
        dispatch({
            type:"LOGIN_FAIL"
        })
       }
       
     
      },(error)=>{
        console.log(error)
      });



    }
    
    
  // alert(JSON.stringify(data))
}
export function AddToCart(data){
  
  return (dispatch)=>{
     dispatch({
    type:"CART_STARTED"
   })
    axios({method:"post",url:process.env.REACT_APP_BASE_URL+"/addcaketocart", headers:{
      authtoken:data.token
      },data:data})
    .then((response)=>{
       console.log(response.data);
       dispatch({
         type:"CART_SUCCESS",
         payload:response.data
       });
       //props.history.push('/carts')
    },
    (error) => {
      console.log(error);
    });
   
  }
 
 
}
export function CartList(data){

  return ((dispatch)=>{
     dispatch({
       type:'CART_LIST_FETCH_STARTED'
     })

     axios({method:"post",url:process.env.REACT_APP_BASE_URL+"/cakecart", headers:{
      authtoken:data
      }})
    .then((response)=>{
       console.log(response.data);
       dispatch({
         type:"CART_LIST_FETCH_SUCCESSFULLY",
         payload:response.data.data
       });
      // props.history.push('/carts')
    },
    (error) => {
      dispatch({
        type:"CART_LIST_FETCH_FAILD",
       // payload:response.data.data
      });
    });
  })
}
export function cakeDetails(data){
  return (dispatch)=>{
   
    dispatch({
      type:"CAKE_DETAILS_FETCH_STARTED"
    });
    axios({ method: "get", url: process.env.REACT_APP_BASE_URL + "/cake/" + data.id, data: JSON }).then(
      (response) => {
        console.log("raw>>>>>>",response.data);
        dispatch({
          type:"CAKE_DETAILS_FETCH_SUCCESSFULLY",
          payload:response.data
        })
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
}