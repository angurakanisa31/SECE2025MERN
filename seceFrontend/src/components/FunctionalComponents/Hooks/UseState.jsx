import { useState } from "react";
var UseState=()=>{
    var[num,setNum]=useState(0)
    return(
        <div>
            <h1>This is Usestate example</h1>
            <button onMouseEnter={()=>setNum(num-1)}>-</button>
            <h4> The Number is {num}</h4>
            <button onKeyDown={()=>setNum(num+1)}>+</button>
            <button onDoubleClick={()=>setNum(initialValue)}>Reset</button>
        </div>
    )
}
export default UseState;