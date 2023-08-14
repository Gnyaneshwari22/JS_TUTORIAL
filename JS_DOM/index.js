console.log('welcome');

// let content=document.querySelector('#wrapper');
// content.addEventListener('click' ,function(event){
//     console.log(event);
// })

// let link=document.querySelectorAll('a');
// link.addEventListener('Doubleclick',function(event){
//     event.preventDefault();
// })///////////////////////////////////////////////////////
// let mydiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//     let newelemenet=document.createElement('p');
//     newelemenet.textContent='this is para' + i;

//     newelemenet.addEventListener('click',function(event){
//         console.log('i have clicked on para');
//     });
//     mydiv.appendChild(newelemenet);
// }
// document.body.appendChild(mydiv);

//optimizing the above code refferring to same function for each i

// let mydiv=document.createElement('div');

// function parasatus(event){
//     console.log(' para'+ event.target.textContent);
// }

// mydiv.addEventListener('click',  parasatus);

// for(let i=1;i<=100;i++){
//     let newelemenet=document.createElement('p');
//     newelemenet.textContent='this is para' + i;

    
//     mydiv.appendChild(newelemenet);
// }
// document.body.appendChild(mydiv);

/////////////////////////////////////////////////////////////////


///*******filtering on specific tags */
// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//     if(event.target.nodeName==='SPAN')
//      console.log('para par click kiya hai'+ event.target.textContent);
// });


// //   function utility(){
//         let content=fetch('https://jsonplaceholder.typicode.com/todos/1');
//          let output = content.json();
//          console.log(output);

// //}

//utility();
// async function helper(){

//                 let options ={
//                 method: "POST",
//                 body: JSON.stringify({
//                     userId: 5,
//                     title: "GNyan is best",
//                     completed: false
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//     };

//     let content=await fetch("https://jsonplaceholder.typicode.com/todos",options);
//     let response=content.json()
//     return response;
// }

// async function utility(){
//     let ans = helper();
//     console.log(ans);
// }


// utility();

// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }
// logJSONData();

// function fetchData(url, callback) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => callback(null, data))
//       .catch(error => callback(error, null));
//   }
  
//   // Example usage
//   fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
//   });


function loadImageAsync(url, callback) {
    const img = new Image();
  
    // Set up event listener for when the image has loaded
    img.addEventListener('load', () => {
      callback(null, img);
    });
  
    // Set up event listener for when there's an error loading the image
    img.addEventListener('error', () => {
      callback(new Error(`Failed to load image at ${url}`));
    });
  
    // Start loading the image
    img.src = url;
  }
  
  // Example usage:
  loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error, img) => {
    if (error) {
      console.error(error);
    } else {
      // Add the loaded image to the page
      document.body.appendChild(img);
    }
  });


  //9.

//   function simulateDelay(delay, callback) {
//     setTimeout(callback, delay);
//   }
  
//   // Example usage:
//   console.log("Before delay");
  
//   simulateDelay(7000, () => {
//     console.log("After delay");
//   });
  
//   console.log("Function finished executing");
  

function rejectWithDelay(errorMessage, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, delay);
    });
  }
  
  // Example usage:
  rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
    console.error(error.message); // Output: Oops! Something went wrong.
  });