
function AuthReducer(state ={
  email:undefined,
  flag:localStorage.token?true:false,
  token:localStorage.token,
  isLoading:true,
  role:localStorage.role?true:false
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
              state['role']=true;
              localStorage.role=action.payload?.role;
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
            state.isLoading=true;
            state.email = undefined;
            state.role = false
            return state;
          }
         
          default : {
            state={...state}
            state['isLoading']=true;
            return state;
          }
      }
}
export default AuthReducer;