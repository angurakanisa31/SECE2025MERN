import { useEffect, useState } from "react";

const useLocal=(key,value)=>{
var [num,setNum]=useState(()=>{
    const jsonValue=localStorage.getItem(key)
    if(!jsonValue!=null)return JSON.parse(jsonValue);
    return value
});

useEffect(()=>{localStorage.setItem(key,JSON.stringify(num))},[key,num]);
return [num,setNum];
}
export default useLocal;