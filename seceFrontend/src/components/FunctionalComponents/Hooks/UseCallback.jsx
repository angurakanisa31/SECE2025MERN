import { useState } from "react";
const UseCallback=()=>{
    var[num,setNum]=useState(0);
    return(
        <div>
            <h2>This Page is meant for UseCallback Hooks!!</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
        </div>
    );

};
export default UseCallback;