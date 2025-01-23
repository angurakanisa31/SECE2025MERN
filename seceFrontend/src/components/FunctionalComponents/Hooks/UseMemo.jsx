import { useState } from "react";
import { useMemo } from "react";
var slowFunction=(num)=>{
    for (var slow=0;slow<10;slow++)
    {}
    return num*2
}

const UseMemo=()=>{
    var [num,setNum]=useState(0);
    var [dark,setDark]=useState(false);
    var styling={backgroundColor:dark? "black":"white",
        color:dark?"white":"black"}
    var doublingUpANumber=useMemo(()=>{
        return slowFunction(num)
    },[num])
    return (
        <div  style={styling}>
            <h3>This page is meant for UseMemo Hook!!</h3>
            <input typr="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setDark(curTheme=>!curTheme)}>Toggle Theme</button>
            <h4>The number is {doublingUpANumber}</h4>
        </div>
    )

}
export default UseMemo;