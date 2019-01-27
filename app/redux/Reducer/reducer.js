import {
    Feching_People_Request,
    Feching_People_Success,
    Feching_People_Error
} from "../Action/type";


const initialState={
    people: [],
    errorMessage: "",
    isFetching: false
};

const reducer = (state=initialState,action)=>{
   if(action.type===Feching_People_Request){
       return{
           ...state,
           isFetching: false

       }
   }
    if(action.type===Feching_People_Error){
        return{
            ...state,
            isFetching: true,
            errorMessage :action.value


        }
    }
    if(action.type===Feching_People_Success){
        return{
            ...state,
            isFetching: true,
            people:action.value


        }
    }
    return state;
};

export default reducer;