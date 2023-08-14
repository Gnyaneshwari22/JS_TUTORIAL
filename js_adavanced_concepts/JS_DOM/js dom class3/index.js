// 
//optomizing the code
  //measuring time
// const t1=performance.now();
// let fragment=document.createDocumentFragment();

// for(let i=0;i<20;i++){
// let newelement=document.createElement('p');
// newelement.textContent="this is my para" + i ;

// fragment.appendChild(newelement);

// }

// document.body.appendChild(fragment);

// const t2=performance.now();
// console.log("this took" + (t2-t1)+ "ms");   ///java script is a  "single threaded language"
////////////////////////////////////////////////////////////////////////////////////////////////

function addpara(){
    let para=document.createElement('p');
    para.textContent="JS is single";
    document.body.appendChild(para);
}

function appendMessage(){
    let para=document.createElement('p');
    para.textContent="kya haal chal";
    document.body.appendChild(para);

}
addpara()
appendMessage()

setTimeout(function(){
    console.log("hello everyone");
},7000);
