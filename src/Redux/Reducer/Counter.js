import { INCREAMENT,DECREAMENT } from "../constant";
const initialState=0;
const Counter=(state=initialState,action)=>{

    switch(action.type)
    {
    case INCREAMENT:return state+action.payload;
    case DECREAMENT:return state-1;
    default: return state;
    }

}
export default Counter;