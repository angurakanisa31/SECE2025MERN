/*
Two Kinds of looping 
1.normal looping 
->for
->while
-> do...while
2.bit advanced looping
->for in
->for of 
->for each
*/

//for in loop

var a =[10,20,30]
var b ={"count":70,"abs":1}
//for (let i in b){
   // console.log(i,b[i]);
 
//}

//set =new Set(["hello",1,2,"sece",4])
//console.log(set);
//for(let i in set){
   // console.log("Looping Running");
   //console.log(i);
//}
// o/p: It will not print anything in my set 

//for of loop

for (let [i,j] of Object.keys(b)) {
    console.log(i);
}
