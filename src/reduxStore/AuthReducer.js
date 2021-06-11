
function AuthReducer(state ={
  email:undefined,
  flag:localStorage.token?true:false,
  token:localStorage.token,
  isLoading:true
},action){
  
      switch(action.type){
          case "LOGIN_STARTED":{
            state ={...state};
            state["isLoading"]=true;
            return state;
          }
          case "LOGIN_SUCCESS":{
              state ={...state};
              state["token"]=action.payload?.token;
              state["email"] = action.payload?.email;
              state["isLoading"]=false;
              state['flag'] = true;
           return state;
          }
          case "LOGIN_FAIL":{
            state={...state};
            state['isLoading']=true;
            return state;
          }
          case "LOGOUT":{
            state ={...state};
            localStorage.clear();
            state.flag = false;
            state.isLoading=false;
            state.email = undefined;
            return state;
          }
         
          default : {
            state={...state}
            //state['isLoading']=false;
            return state;
          }
      }
}
export default AuthReducer;