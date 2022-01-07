//interfaces
import { Invoice } from './classes/invoices.js';
import { ListTemplate } from './classes/ListContainer.js';
import { Payment } from './classes/Payment.js';
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
//Class
// let docOne: HasFormatter;
// let docTwo:HasFormatter;
// docOne = new Invoice('Amitesh','household products',30)
// docTwo = new Payment('Aditya','Crockery Product',30)
// let docs: HasFormatter[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice('Amitesh','household products',30);
// const invTwo = new Invoice('Aditya','Crockery Product',30);
// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv =>{
//     console.log(inv.client,inv.amount,inv.format());
// })

/*

Interfaces and Types In Class with help of Implements

interface Students {
  x: string;
  y: string;
}

class College implements Students {
  x = 'Amitesh';
  y = 'Aditya';
}

type students1 = {
   x: string;
   y:  string;
};

class College2 implements Students1 {
  x = 'Shubham';
  y = 'Stayam';
}






*/
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    //spreadoperator(...values)
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
