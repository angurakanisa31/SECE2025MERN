//Event Handling
import { useState } from "react";
const About=()=>{
    var [text,setText]=useState("vijay")
    function handleText(e){
        setText(e.target.value);
   }
    return (<div>
        <h2>This is About Components.</h2>
        <h3>TextArea:</h3>
        <textarea value={text} onChange={handleText}/>
        <p>The text is {text}</p>
    </div>)
};
export default About