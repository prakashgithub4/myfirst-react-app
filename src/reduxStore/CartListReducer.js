let inicialstate ={
    isLoading:true,
    cartdata:[]
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
          default:return state
      }
}
export default CartListReducer;