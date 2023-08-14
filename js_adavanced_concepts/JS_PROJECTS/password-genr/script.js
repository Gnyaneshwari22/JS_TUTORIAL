const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");


const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const  lowercaseCheck=document.querySelector("#lowercase ");
const numberCheck=document.querySelector("#numbers");
const symbolCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");
const allcheckBox=document.querySelector("input[type=checkbox]");
const symbols='~`!@#$%^&*()_-+=/:;<,>.?"';

let  password="";
let passwordLength=10;
let checkCount=0;

handleSlider();

//seet stregnth crcle color grey 


//set password length
function  handleSlider(){
    inputSlider.value=passwordLength;  
    lengthDisplay.innerText=passwordLength ;
     
}

function setIndicator(color){
    indicator.style.backgroundcolor=color;

    //shadow
}

function getRanInteger(){
    Math.floor(Math.random()* (max-min) + min);
}

function generateRandomNumber(){
    return getRanInteger(0,9);
}

function generateRandomLowercase(){
    return String.fromCharCode(getRanInteger(97,123));
}

function generateRandomUpperCase(){
    return String.fromCharCode(getRanInteger(65,91));
}

function generateRandomSymbol(){
    const randNum=getRanInteger(0,symbols.length);
    return symbols.charAt(randNum);
} 


function calStrength(){
    let hasUpper=false;
    let haslower=false;
    let hasNum=false;
    let hasSym=false;

    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) haslower=true;
    if(numberCheck.checked) hasNum=true;
    if(symbolCheck.checked) hasSym=true;

    if(hasUpper && haslower && (hasNum||hasSym) && passwordLength>= 8 ){
         setIndicator("#0f0");
     }else if(
        (haslower || hasSym) && 
        (hasUpper|| hasNum) && 
        passwordLength>=9
     ){ 
        setIndicator("#ff0");
     }else{
        setIndicator("#f00");
     }
}


//copying password to clipboard

async function copyContent(){
   try{
       await navigator.clipboard.writeText(passwordDisplay);
       copyMsg.innerText="Copied"; 
   }
   catch(e){
    copyMsg.innerText="Failed"; 
   }
   //to make copy wala scan visible
      copyMsg.classList.add("active");

    //hide after two sec
    setTimeout( ()=>{
        copyMsg.classList.remove("active");
    },2000);  
    
}

 function shufflePassword(array){
    //fisher yet method
    for(let i=array.length-1;i<0;i--){
        const j=Math.floor(Math.random()* (i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }

    let str="";
    array.forEach((el) => (str+=el));
    return str;
 }

 function handleCheckBoxChange(){
    checkCount=0;
    allcheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
          checkCount++;
            
    });

    //special case

    if(passwordLength<checkCount){
      passwordLength=checkCount;
      handleSlider();
        }
}
allcheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength= e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value>0)
      copyContent();
})

 generateBtn.addEventListener('click',() => {

   //none of the checkbox are selected

    if(checkCount ==0)
     return;

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider(); 
    } 

//     //lets start the journey to find new password
     console.log("starting the journey");
    
//     //remove old password
       password="";

//     //lets put the stuff mentioned by checkbox

//     //if(uppercaseCheck.checked){
//      //   password += generateRandomUpperCase();
//    // }

//     //if(uppercaseCheck.checked){
//      //   password += generatelowerCase();
//    // }

//    //if(uppercaseCheck.checked){
//      //   password += generatenum();
//    // }

//    //if(uppercaseCheck.checked){
//      //   password += generatesym();
//    // }

   let funcArr= [];

   if(uppercaseCheck.checked)
      funcArr.push(generateRandomUpperCase);
    
   if(uppercaseCheck.checked)
      funcArr.push(generateRandomLowercase);
    
   if(uppercaseCheck.checked)
      funcArr.push(generateRandomNumber);
  
   if(uppercaseCheck.checked)
      funcArr.push(generateRandomSymbol);

    //compulsory addition
    
    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    console.log("compulsory addition done");

    //remaining addition

    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRanInteger(0, funcArr.length);
        console.log("randindex" + randIndex);
        password += funcArr[randIndex]();
    }

    console.log("remaining addition done");

    //shuffle the password

    password=shufflePassword(Array.from(password));
    console.log("shuffling done");

    //show in UI

    passwordDisplay.value = password ;
    console.log("UI addition done");

    //calculate strength
    calStrength();
});





