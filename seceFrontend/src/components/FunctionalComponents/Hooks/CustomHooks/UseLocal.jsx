import useLocal from "./SampleCustomHook2";

const UseLocal=()=>{
    var [num,setNum]=useLocal("Number","");
  
    return(
        <div>
            <h2>Utilizing Custom Hook Created.</h2>
            Number:<input type="num" value={num} onChange={(e)=>setNum(e.target.value)}/><br/>
            
            <h3>The Number typed is {num}</h3>
        </div>
    )
}
export default UseLocal;