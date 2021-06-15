import {call, takeEvery, put, all} from "redux-saga/effects"
import axios from "axios";

const addCake = (action) => {
    return axios({
        url: process.env.REACT_APP_BASE_URL + '/addcake',
        method: "post",
        data: action.payload
    })
}

export function *AddCakeGenerator(action, props) {
    let result = yield(call(addCake, action))
 
    if (result.data) {
        
      //  window.location.reload()
        yield put({
            type: "ADD_CAKE_SUCCESS",
            payload: result.data
        })
    } else {
        yield put({
            type: "ADD_CAKE_FAILURE"
        })
    }
}

function *AddCakeSaga() {
   
    yield takeEvery('ADD_CAKE_STARTED', AddCakeGenerator)
}
/** Related Cakes */
function relatedCakes(action){
  //  console.log("api",action.payload)
    return axios({
        url:process.env.REACT_APP_BASE_URL+"/searchcakes?q="+action.payload.query,
        method: "get",
        data: action.payload||{}
    })
}
export function* RelatedCakeGenarator(action,props){
    
   let result = yield (call(relatedCakes,action));
    
   if(result.data){
       yield put({
           type:"REALTED_CAKES_FETCH_SUCCESSFULLY",
           payload:result.data
       });
   }else{
       yield put({
           type:"RELATED_CAKES_FETCH_FAILD"
       })
   } 
}
function* RelatedCakeSaga(){
  yield takeEvery("RELATED_CAKES_FETCH_STARTED",RelatedCakeGenarator);
}
/** get cakes  */
function getCakes(action){
    return axios({
        method:'get',
        url:process.env.REACT_APP_BASE_URL+"/allcakes",
        data:JSON
    })
    
}
function* CakeGenarator(action,props){
    let result = yield (call(getCakes,action))
    if(result.data){
        yield put({
            type:"FETCH_CAKES_SUCCESSFULLY",
            payload:result.data ||{}
        })
    }else{
        yield put({
            type:"FETCH_CAKES_FAILED",
        })
    }


}
function* cakeSaga(){
    yield takeEvery('FETCH_CAKES_STARTED',CakeGenarator)
}
export default function *MainSaga() {
    yield all([AddCakeSaga(),RelatedCakeSaga(),cakeSaga()])
}