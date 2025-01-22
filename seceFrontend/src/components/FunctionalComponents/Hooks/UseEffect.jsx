import { useEffect ,useState} from "react";
const UseEffect=()=>{
    var [text,setText]=useState("");
    useEffect(()=>{
        console.log(text);
    },[text])
    return (
        <div>
            <h2>This is UseEffect example</h2>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
        </div>
    )
}
export default UseEffect;