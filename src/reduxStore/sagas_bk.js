import { takeLatest,takeEvery, call, put,all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
 function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}
// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
      // function that makes the api request and returns a Promise for response
    const response = yield call(()=>{
        return axios({
            method: "get",
            url: "https://dog.ceo/api/breeds/image/random"
          });
    });
    //console.log(response)
    const dog = response.data.message;
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
}
/** ADD CAKE */
const addCake = (action) => {
    return axios({
        url: process.env.REACT_APP_BASE_URL + '/addcake',
        method: "post",
        headers: {
            authtoken: action.payload.token,
          },
        data: action.payload || {}
    })
}

export function *AddCakeGenerator(action, props) {
    
    let result = yield(call(addCake, action))
    alert("ok")
    console.log("hell",result)
    if (result.data) {
      //  window.location.reload()
     
        yield put({
            type: "ADD_CAKE_SUCCESS",
            payload: result.data
        })
    } else {
        alert("not ok")
        yield put({
            type: "ADD_CAKE_FAILURE"
        })
    }
}

function *AddCakeSaga() {
    yield takeEvery('ADD_CAKE_STARTED', AddCakeGenerator)
}
export default function *MainSaga() {
    yield all([AddCakeSaga(),watcherSaga()])
}