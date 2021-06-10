let inicialstate ={
    isLoading:true,
    cartdata:[]
}
function CartReducer(state =inicialstate,action){
   switch(action.type){
          case "CART_STARTED":{
              state={...state};
              state["isLoading"]=true;
              return state;
          }
          case "CART_SUCCESS":{
              state={...state};
              state["isLoading"]=false;
              state["cartdata"]=action.payload
              return state;

          }
          case "CART_FAIL":{
              state ={...state};
              state["isLoading"]=false;
              return state;
              
          }
    
        default : return state
   }
}
export default CartReducer;