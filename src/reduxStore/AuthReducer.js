
function AuthReducer(state ={
  email:undefined,
  flag:localStorage.token?true:false,
  token:localStorage.token
},action){
  
      switch(action.type){
          
          case "LOGIN":{
              state ={...state};
              state["token"]=action.payload?.token;
              state["email"] = action.payload?.email;
              state['flag'] = true;
           return state;
          }
          case "LOGOUT":{
            state ={...state};
            localStorage.clear();
            state.flag = false;
            state.email = undefined;
            return state;
          }
          default : return state;
      }
}
export default AuthReducer;