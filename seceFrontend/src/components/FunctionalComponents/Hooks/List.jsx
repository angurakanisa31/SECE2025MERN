import { useState } from "react";
import { useEffect } from "react";
const ListItem=({func})=>{
    var [number,setNumber]=useState([]);
    useEffect(()=>{
       
        setNumber(func(4));
    },[func])
     return(
        <div>
            <h3>This number list has follows according to the number present in input box</h3>
            <h4>
                {number.map((number,index)=>{

                  return <h5 key={index}>{number}</h5>
                })}
            </h4>
        </div>
     )
}
export default ListItem;