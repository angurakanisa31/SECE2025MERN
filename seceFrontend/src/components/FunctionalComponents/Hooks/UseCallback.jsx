import { useCallback, useState } from "react";
import ListItem from "./List";
const UseCallback=()=>{
    var[num,setNum]=useState(0);
    var [dark,setDark]=useState(true);
    var styling={
        backgroundColor:dark?"black":"white",color:dark?"white":"black"
    }
    var getItems=useCallback((inc)=>{return [num+inc+1,num+inc+3,num+inc+5];},[num])
    return(
        <div style={styling}>
            <button onClick={()=>setDark(dark=>!dark)}>Change Theme</button>
            <h2>This Page is meant for UseCallback Hooks!!</h2>
            <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value))}/>
            <ListItem func={getItems}/>
        </div>
    );

};
export default UseCallback;