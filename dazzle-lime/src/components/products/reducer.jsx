const reducer=(state,action)=>{
    switch(action.type){
      case 'FETCH_loading':{
        return {
          loading:true,
      data:[],
      err:false
        }
      }
      case 'FETCH_success':{
        return {
          loading:false,
      data:action.payload,
      err:false
        }
      }
      case 'FETCH_error':{
        return {
          loading:false,
      data:[],
      err:true
        }
      }
      default:{
        return state;
      }
    }
    }
    export default reducer;