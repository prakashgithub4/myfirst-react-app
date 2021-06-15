let inicialstate ={
    isLoading:true,
    cakes:[],
    related:[],
    allcakes:[],
}

export default function CakeReducer(state=inicialstate,action){
      switch(action.type){
          case "CAKE_DETAILS_FETCH_STARTED":{
              state ={...state};
              state["isLoading"]=true;
              return state;

          }
          case "CAKE_DETAILS_FETCH_SUCCESSFULLY":{
              state ={...state};
              state['isLoading']=false;
              state['cakes']=action.payload;
            
              return state;
          }
          case "CAKE_DETAILS_FETCH_FAILD":{
              state = {...state}
              state["isLoading"]=false;
              return state;
          }
          /** ADD CAKE ACTION */
          case "ADD_CAKE_STARTED":{
              state ={...state}
              state['isLoading']=true;
              return state;
          }
          case "ADD_CAKE_SUCCESS":{
              state=[...state];
              state['isLoading']=false;
              return state;
          }
          case "ADD_CAKE_FAILURE":{
              state=[...state];
              state["isLoading"]=false;
              return state
          }
          case "RELATED_CAKES_FETCH_STARTED":{
               state={...state};
               state["isLoading"]=true;
               state["related"]=[];
               return state;
          }
          case "REALTED_CAKES_FETCH_SUCCESSFULLY":{
              state={...state};
              state["isLoading"]=false;

              state["related"]=action.payload;
              return state;

          }
          case "RELATED_CAKES_FETCH_FAILD":{
              state = {...state};
              state["isLoading"]=false;
              state["related"]=[];
              return state;
          }
          case "FETCH_CAKES_STARTED ":{
              state ={...state};
              state['isLoading']=true;
              return state;
          }
          case "FETCH_CAKES_SUCCESSFULLY":{
            state={...state};
            state['allcakes']=action.payload;
            state['isLoading']=false;
            return state;
          }
          case "FETCH_CAKES_FAILED":{
              state =[...state];
              state['isLoading']=false;
              return state;
          }
          default : return state;
      }
}