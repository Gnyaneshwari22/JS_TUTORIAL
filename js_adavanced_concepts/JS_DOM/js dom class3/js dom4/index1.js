console.log("hello ji");

let newelement=document.createElement('p');
newelement.textContent="this is para";
document.body.appendChild(newelement);

////////////////creating promises///////////////////////////////////

/*let meapromise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("this is my promise");
    },5000);

    resolve(2233);
});

console.log("pehlaa");


let promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("this is my secind promiser");
    },9000);

    reject(Error('it is true'));
});*/
/////////////////////////////////use of then and catch////////////////////////////
// let waada1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("settimeout1 started");
//     },3000);
//     resolve('waada1 called');   
// })

// let output=waada1.then(() => {
//         let waada2=new Promise(function(resolve,reject){
//             setTimeout(()=> {
//                 console.log("setttimeout2 started");
//             },8000);
//             resolve("waada 2 resolved");  
//         }) 
//         return waada2;
// })

// output.then((value)=> console.log(value));

////////////////////////////////////////////////////////////////

////ASYNK AND AWAIT FUNCTION

async function utility(){

let MumMosum=new Promise(function(resolve,reject){
        setTimeout(()=>{
           resolve("mum main bhot coll hai");
        },1000) ;   
        
        // resolve(true);
});
let hydMosum=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("hyderbaad main bhot garam hai");
    },3000)  ;
    // resolve(true); 
});

// console.log(MumMosum);
// console.log(hydMosum);
  let MM=await MumMosum;
   let hm=await hydMosum;
   return [MM,hm];

}

let s=console.log(utility());
console.log(s);


