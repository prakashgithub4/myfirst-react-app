let inicialstate ={
    isLoading:true,
    cartdata:[]
}
function CartReducer(state =inicialstate,action){
   switch(action.type){
       case "ADD_TO_CART":{
           state ={...state};
           state.cartdata.push(action.payload.data);
           //localStorage.setItem("carts", JSON.stringify(state.cartdata));
           state["isLoading"]=false;
           return state;
       }
       case "ADD_TO_CART_LIST":{
           state ={...state}
           state["cartdata"]=action.payload.data;
           state["isLoading"]=false;
           return state;
       }
       default : return state
   }
}
export default CartReducer;