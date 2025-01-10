//ES6->ECMA Script Standard 6
//1.Variable declaration->refer variables.js

//2.Scope 
//var->global scope
//let->local/block scope
//const->global scope
//var a=10
//const con=3.14
//console.log(a);
//console.log(con);
//{
    //a =20
    //let b=30
    //console.log(a);
    //console.log(b);
//}
//console.log(a);
//console.log(con);
//console.log(b);

//3.class and object

//class ClassEg{
    //constructor(){
       // this. a=10
   // } 
    //4.aarrow functions
    //funInClass=()=>{
       // console.log(this.a);
   // } 
//}
//obj = new ClassEg()
//console.log(obj.a);
//console.log(obj.funInClass());

//5.ternary operator

//a=10
//console.log((a%2==0)?"even":"odd");

//6.spread operator

//a=[10,20,30,40]
//b=[50,60,70]
//console,log(b,a);
//c=[...b,...a]
//console.log(a);

//7.rest operator 
//function restop(a,b,...arg){
    //console.log(a);
    //console.log(b);
    //console.log(...arg);
//}
//restop(10,20,30,40,50,...b)

//8.Destructuring operator
//var array=[10,20,30]
//var [a,b,c,d]=array
//console.log(a,b,c,d);

//9.Hoisting
//1.variable hoisting
//console.log(a);
//const a=10;
//console.log(a);

//2Funtion hoisting
//console.log(fun());
//function  fun(){
    //return 10
//}
