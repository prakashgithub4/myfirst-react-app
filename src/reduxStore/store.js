import {createStore,combineReducers,applyMiddleware} from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './Cartreducer';
import CartListReducer from './CartListReducer';
import CakeReducer from './CakeReducer';
import thunk from "redux-thunk"


let middleware =(store)=>next=>action=>{
  // console.log(">>>>>>>>>",store.getState())
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
   let log ={time:formatted_date,action:action.type}
   console.log("log",log);
   next(action);
   
  // const result = next(action);
}
//console.log("middle ware",JSON.stringify(result))
let store  = createStore(combineReducers({AuthReducer:AuthReducer,CartReducer:CartReducer,CartListReducer:CartListReducer,CakeReducer:CakeReducer}),applyMiddleware(middleware,thunk));
export default store;
