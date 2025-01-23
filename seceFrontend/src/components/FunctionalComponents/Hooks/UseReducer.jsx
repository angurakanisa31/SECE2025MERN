import { useReducer } from "react";
const UseReducer=()=>{
    function Reducer(state,action){
        switch(action.type){
            case 'increment':
                return {val:state.val++};
        
            case 'decrement':
                return {val:state.val--};
        

            default:
                return state;
        }
    }
    var[state,setaction]=useReducer(Reducer,{val:0})
    return(
        <div>
            <h2>This page is meant for use reducer hook.</h2>
            <Nvabar/>
            <button onClick={()=>{setaction({type:'increment'})}}>+</button>
            <span>{state.val}</span>
            <button onClick={()=>{setaction({type:'decrement'})}}>-</button>
        
        </div>
    )
}
export default UseReducer;