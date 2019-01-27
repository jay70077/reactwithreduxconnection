import {
    Feching_People_Request,
    Feching_People_Success,
    Feching_People_Error
} from "./type";


export const FechingPeopleRequest =()=>({type:Feching_People_Request});
export const FechingPeopleSuccess =(json)=>({type:Feching_People_Success,value:json});
export const FechingPeopleError =(error)=>({type:Feching_People_Error,value:error});


export const peopleDataFetch=()=>{
    return async dispatch =>{
        dispatch(FechingPeopleRequest());
        try{
         let response = await fetch("https://randomuser.me/api/?results=15");
         let json = await response.json();
            dispatch(FechingPeopleSuccess(json.result));
        }catch (error) {
            dispatch(FechingPeopleError(error));
        }
    }

};