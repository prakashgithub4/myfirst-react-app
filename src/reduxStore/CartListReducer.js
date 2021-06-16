let inicialstate ={
    isLoading:true,
    cartdata:[],
    isRemovecartLoading:true,
    message:undefined,
    totalprice:0,
    isConfirmOrder :false,

    isAllcartRemove:false,

    isOrderPlaced:false,
    orderPlacedata:[]
}
function CartListReducer(state=inicialstate,action){
      switch(action.type){

          case "CART_LIST_FETCH_STARTED":{
              state ={...state};
              state["isLoading"]=true;
              return state;
          }
          case "CART_LIST_FETCH_SUCCESSFULLY":{
              state = {...state};
              state['isLoading']=false;
              state['cartdata']=action.payload;
              return state;
          }
          case "CART_LIST_FETCH_FAILD":{
              state ={...state};
              state['isLoading']=false;
              return state;
          }
          /** Remove carts */
          case "REMOVE_CART_STARTED":{
              state ={...state};
              state['isRemovecartLoading']=true;
              return state;
          }
          case "REMOVE_CART_SUCCESSFULLY":{
              state ={...state};
              state['isRemovecartLoading']=false;
             let get_index = state.cartdata.findIndex(item => item.cakeid === action.payload.cakeid);
             state['cartdata'] = state.cartdata.splice(get_index,1);
             state["message"]=action.payload;

              return state;
          }
          case "REMOVE_CART_FAILED":{
              state={...state};
              state["isRemovecartLoading"]=true;
              return state;

          }
          case "CONFIRM_ORDER_STARTED":{
              state ={...state};
              state['isConfirmOrder']=false;
              return state;
              
          }
          case "CONFIRM_ORDER_SUCCESS":{
              state = {...state};
              state['isConfirmOrder']=true;
              state['totalprice']=action.payload;
              return state;
          }
          case "CAKE_ALL_CART_STARTED":{
              state={...state};
              state['isAllcartRemove']=false;
              return state;
          }
          case "CAKE_ALL_CART_REMOVED":{
              state = {...state};
              state['isAllcartRemove']=true;
              state.cartdata =[];
          }
          case "ORDER_PLACE_STARTED":{
              state={...state};
              state['isOrderPlaced']=false;
              return state;


          }
          case "ORDER_PLACED_SUCCESS":{
              state={...state};
              state['orderPlacedata']=action.payload;
              state['isOrderPlaced']=true;
              return state;

          }
          default:return state
      }
}
export default CartListReducer;