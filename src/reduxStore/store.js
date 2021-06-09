import {createStore,combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './Cartreducer';
let store  = createStore(combineReducers({AuthReducer:AuthReducer,CartReducer:CartReducer}));
export default store;
