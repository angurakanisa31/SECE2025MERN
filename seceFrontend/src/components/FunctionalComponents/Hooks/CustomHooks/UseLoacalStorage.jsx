import useLocalStorage from "./SampleCustomHook";

const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("customerId","");
    var [pass,setPass]=useLocalStorage("Password","");
    return(
        <div>
            <h2>Utilizing Custom Hook Created.</h2>
            CustonerId:<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/><br/>
            Password:<input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <h3>The text typed is {text}</h3>
        </div>
    )
}
export default UseLocalStorage;