import {useState} from 'react';
const Contact=()=>{
    var [num,setNum]=useState(0);
    return (<div>
        <h3>This is contact page!!</h3>
        <h3>This is a state example</h3>
        <h4>Number is {num}</h4>
        <button onClick={()=>setNum(num+1)}>+</button>
    </div>)
};
export default Contact;