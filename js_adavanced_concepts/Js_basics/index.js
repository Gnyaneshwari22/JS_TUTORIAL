// console.log("weelcome to code world");
// let y=5;
// console.log(y);
// const x=10;

// let num=45;
// console.log(num);

// num="truue";
// console.log(num);

// let a=20;
// let b=10;

// let c=a+b;
// // let c=a*b;
// // let c=a/b;
// // let c=a%b;
// console.log(c);

console.log("lets strt");
//object creation
// const Rectangle= {
//     length:1,
//     breadth:2,
//     draw:function(){                 //draw(){ } : can also be used
//         console.log('drawing rectangle');
//     }
// };
 

// factory function

// function createrectangle(){

//     return rectangle={
//        length:1,
//        breadth:4,

//        draw(){
//         console.log('drawing rectangle');
//        }
//     };   
// }

// let rectangleobj1=createrectangle();


//With parameters 

// function createrectangle(Lengthval,breadthval){

//     return rectangle={
//        length:Lengthval,
//        breadth:breadthval,

//        draw(){
//         console.log('drawing rectangle');
//        }
//     };   
// }

// let rectangleobj2=createrectangle(7,8);
// let rectangleobj3=createrectangle(10,8);
// let rectangleobj4=createrectangle(7,45);


////constructor function 
function Rectangle5(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw= function(){
        console.log('drawing rectangle');
    }
}
//calling the constructor
let create_rectangle=new Rectangle5(4,6);
let create_rectangle3=new Rectangle5(4,6);

create_rectangle.color='yellow';
console.log(create_rectangle);
//dynamic 

//primitive type storing::copy will be created
let x=4;
let y=x;
x++;
console.log(x);//5
console.log(y);//4

//reference type::referring to the same address
let a={value:10};
let b=a;
 a.value++;
 b.value;
 console.log(a); //11
 console.log(b);//11  

 //for-in loop

 let rectangle ={
    length:2,
    breadth:4
 };

 for(let key in rectangle){
    //keys are reflected through key variables

    console.log(key,rectangle[key]);
 }

 if('length'in rectangle){
    console.log('present');     
 }
 else{
    console.log('absent');
 }

 let number=[2,3,4,56];
 console.log(number);
 number.push(9);
 console.log(number);
 number.unshift(9);
 console.log(number);
 number.splice(3,0,'a','b','c','d');
 console.log(number);
 number.splice(3,0,'r','b','c',);
 console.log(number);
 console.log(number);

 //searching for primitive data
 console.log(number.indexOf(12));
 console.log(number.includes(4));
 console.log(number.includes(78));
 console.log(number.includes(4,2));


 //searching on references or objects
 let arr=[
   {no:1,naam:'rahul'},
   {no:2,naam:'rohit'}

 ];
 console.log(arr);
 console.log(arr.indexOf({no:1,naam:'rahul'}));  ///cannot use includes and index of methods for seraching elemnt in references or objects
 console.log(arr.includes({no:2,naam:'rohit'}));


 //CALL BACK FUNCTION
 
 let courses=[
   {no:1,naam:'rahul'},
   {no:2,naam:'rohit'}
 ];

 let course=courses.find(function(course){
   return course.naam==='rohit';
 })
 console.log(course);


 let course1=courses.find(function(course1){
   return course1.naam==='rani';
 })
 console.log(course1);

 let course3=courses.find(course1=> course1.naam==='rohit');

 console.log(course3);

 let course4=courses.find(course4=> course4.no===1);

 console.log(course4);

 //REMOVING ELEMENTS FROM AN ARRAY

 let array3=[2,3,4,6,7,9];
 array3.pop(9);
 console.log(array3); //end element removed
 array3.shift(2);
 console.log(array3); //starting element removed 
 array3.splice(2,1);
 console.log(array3);  //middle element removed 


 //EMPTYING THE ARRAY

 let array4=[2,3,4,5,6,7,8,9];
 let array5=array4;

 //  array4=[];   //elements are not deleted complated using this method
 

 console.log(array5);
 array4.length=0;  //good method to delete
 console.log(array4);
 console.log(array5);

let array6=[2,3,4,56,7];
  //good method to delete
 array6.splice(0,array6.length)//
console.log(array6);

//COMBINING ELEMENTS

let frst=[1,2,3];
let secnd=[4,5,6];

let combine=frst.concat(secnd);
console.log(combine);

//SLICING ELEMENTS

let marks=[10,20,30,40,50,60,70,80,90,100];
let sliced =marks.slice(5,9);
console.log(sliced);

//one more method

let first=[1,2,3];
let second=[4,5,6];

let combined=[...first,'a', 'b',...second ,'c'];
console.log(combined);

///ITERATING ON ARRAY

let array9=[10,20,30,40,50,60,70];

//for-of loop
for(let i of array9){    
   console.log(i); 
}
//for-each loop
array9.forEach(array9=>console.log(array9));  

//JOINING AND SPLITTING OF THE ARRAY

let array10=[10,20,30,40,50];
const joined=array10.join('_');
console.log(joined);

let message="this is my frst message";
let parts=message.split(' ');
console.log(parts);

//SORTING ON ARRAYS

let array_11=[3,5,9,6,7,2,1];
array_11.sort();               //asecnding order
console.log(array_11);

array_11.reverse();
console.log(array_11);    //descending order

//FILTERING METOD

let num=[1,2,-1,-4];
let filterd=num.filter(fil=> fil>=0);
console.log(filterd);

let items=filterd.map(function(num){  //filterd.map(num=>{value:num})
   return{value:num};
})
console.log(items);

// let items_one=num.filter(fil=> fil>=0).map (num=>{value:num});
// console.log(items_one);



