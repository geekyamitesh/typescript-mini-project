"use strict";
// let character = 'Amitesh';
// let age=20;
// let IsclassToday=true;
// const cir = (diameter)=>{
//   return diameter*Math.PI;
// }
// const circle = cir(10);
// console.log(circle);
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
//Arrays
// const cse_student =['amitesh', 10,'Aditya',20,'Shivam',40];
// console.log(cse_student[1]);
// //object
// const maqsoft={
//   name:"Amitesh",
//   age:22,
//   emailid:"amitesh5@fmail.com"
// }
// maqsoft.name="Ammm";
//if we declare any object the virtue of intial state will be same as new state
//Explicit
// let nam : string;
// nam="Amitesh";
// //Arrays
// let f1:string[]=[];
// let mixed :(boolean|number|string)[]=[];
// Typescript as a dynamic
// let vari : any;
// vari=25;
// console.log(vari);
// vari="Smit";
// console.log(vari);
//function in typescript
// let greet =()=>{
//     console.log("Hello World");
// }
// const add =(a:number, b:number, d: number|string =09):void=>{
//     console.log(a+b);
//     console.log(d);
// }
// let c=add(4,5);
// type stringorname = string|Number;
// type objwithname ={
//     name:string ,
//     uid:stringorname
// }
// const logdetails=(uid:stringorname,item:String)=>{
//     console.log(`${item} has a uid of  ${uid}`);
// }
// Function Signature
// let greet: (a:string,b:string)=>void
// //Greet Function Declaration
// greet=(name:string, greeting:string)=>{
//     console.log(`${name} says ${greeting}`);
// }
// Same like function arguement we use 
/*
DOM in typescript same like javascript we target elemnt of html tag to manipulate it. So we need to focus and work on it.
*/
// const anchor = document.querySelector('a')!;
// /*
// if(anchor){
//     console.log(anchor.href);
// }
// */
// console.log(anchor?.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
