let inicialstate ={
    isLoading:true,
    cakes:[]
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
          default : return state;
      }
}