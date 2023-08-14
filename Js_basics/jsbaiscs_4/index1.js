console.log("kya hal chaaL sabhike");
console.log("kya hal chaaL sabhike");

// //func call
// print();

// //func declartion
// function print(){
//     console.log("running");
// }

// print();

// //func assignment

// //named fun assign
// let stood=function print(){
//     console.log("cunning");
// }

// stood();
// let jump=stood;
// jump();

// //anonyms func assign
// let stop=function (){
//     console.log("beatning");
// }
// stop();

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// console.log(sum(1,4));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,4,3,2,6));

// //dynamic function

// function addition(){
//     let total=0;
//     for(let i of arguments)
//        total=total+i;
//     return total;   
// }

// let ans=addition(1,2,3,4);
// console.log(ans);

// //REST OPEARATOR

// function add2(num,val,...args){
//     console.log(args);
// }
// add2(1,2,3,4,5,6);

// //get and set function declaration and use

// let person={
//     fName:'Love',
//     lName:'Bubber',
//     get fullname(){
//         return `${person.fName}    ${person.lName} `
//     },
//     set fullname(value){
//         if(typeof value !== String){
//             throw new Error('u have not sent valid parameter');
//         }
//       let parts=value.split(' ');
//       this.fName=parts[0];
//       this.lName=parts[1];
//     }
// };



//  //calls get function

// // try {
// //     person.fullname="rahul sharma";
// // }
// // catch(e){
// //     alert(e)
// // }
// console.log(person.fullname);

// let arr=[1,2,3,4,45,67,89,234567];
// let total_sum=arr.reduce ((accumulator, currentValue) => accumulator + currentValue,);

// console.log(total_sum);

let person={

     naam:["ajay","vijay"],
     age:30,
     bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
     },
    introduceself:function(){
        console.log(`hii my name is ${this.name[0]} and ${this.name[1]}`);
      },

};

let value=person.age;
console.log(value);
person.bio();

console.log(person);