//async await

async function asAw(){
    setTimeout(()=>{
        console.log("Inside Timeout")
    },5000)
   //return "This is asyn/await"
}
asAw().then(function(output){
    console.log(output);
})
