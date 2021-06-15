
function AuthReducer(state ={
  email:undefined,
  flag:localStorage.token?true:false,
  token:localStorage.token,
  isLoading:true,
  role:localStorage.role?true:false,
  cake_image:undefined,
  image_status:false
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
              localStorage.email=action.payload?.email;
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
          /** Cake upload  */
          case "UPLOAD_CAKE_IMAGE_STARTED":{
              state={...state};
              state["image_status"]=true
              state['cake_image']=action.payload
              return state;
          }
          case "UPLOAD_CAKE_IMAGE_SUCCESSFULLY":{
            state={...state};
            state['image_status']=false;
            state['cake_image']=action.payload;
          //  console.log("action",action.payload)
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