import { Component } from "react";

const trackingButtonComponent=(Component)=>{
    return(props)=>{
console.log("HoC Tracking Comp");
const handleClick=()=>{
    console.log("Logged In Fetch the Tracking Info",props.trackingInfo);
}
return(
    <div onClick={handleClick}> 
        <h1>This is the Higher Order Component</h1>
        CustonerId:<input type="text"/><br/>
        Password:<input type="text" />
        <Component {...props}/>
    </div>

)
    }
}
export default trackingButtonComponent;