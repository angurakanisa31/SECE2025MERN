import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseRef=()=>{
    var [text,setText]=useState("");
    var prevrend=useRef();
    useEffect(()=>{
        console.log(prevrend.current);
         prevrend.current=text
    },[text])
    return(
        <div>
            <h2>This page is meant for UseRef Hook.</h2>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
            <h5>The previous render text is {prevrend.current}</h5>
        </div>
    )

}
export default UseRef;