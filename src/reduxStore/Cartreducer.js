let inicialstate ={
    isLoading:true,
    cartdata:[],

    orders:[],
    isOrderLoaded:false,

    isOrderPlaced:false
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

          /** My Order list Reducer */
          case "ORDER_LIST_FETCH_STARTED":{
              state={...state}
              state['isOrderLoaded']=true;
              return state;

          }
          case "ORDER_LIST_FETCH_SUCCESSFULLY":{
              state={...state};
              state['isOrderLoaded']=false;
              state['orders']=action.payload;
              return state;
          }
       /** order place process  */
       case "ORDER_PLACE_PROCESS_STARTED":{
           state ={...state};
           state['isOrderPlaced'] = true;
           return state;

       }
       case "ORDER_PLACE_SUCCESSFULLY":{
           state={...state};
           state['isOrderPlaced']=false;
          // state['orders']=action.payload
           return state;
       }
        default : return state
   }
}
export default CartReducer;