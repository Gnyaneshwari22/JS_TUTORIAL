//1.Write a function to change the text and background color of a button on the click event.
// function changeButtonBG() {

//     // Select the button element change the css properties
//     const button = document.querySelector("button").style.backgroundColor='blue';
    
//   }

//    function changeButtonText() {
//     // Select the button element
//     const button = document.querySelector("button");
  
//     // Check if the button is currently showing "Click Me!"
//      if (button.textContent ==="click me") {
//     //   // If it is, change the text to "Clicked!"
//       button.textContent = "clicked";
//     }
//      else {
//     //   // If it is not, change the text back to "Click Me!"
//        button.textContent = "Click Me!";
//     }
//   }

//   // Add a click event listener to the button
//   const button = document.querySelector("button");
//   button.addEventListener("click", changeButtonText);
//   button.addEventListener("click", changeButtonBG);
  
//   //2.Write a function to add a CSS class to an element on the mouseover event.


//   function add_css() {
//        const color = document.getElementById("css-btn").style.cssText='color:red; background-color:pink ';
//   }

//   const mouse_event=document.getElementById("css-btn");
//   mouse_event.addEventListener("mouseover",add_css);
/////////////////////////////////////////////////////////////////////////////////////////////
  //3.Write a function to remove a CSS class from an element on scroll event.
  // function removeClassOnScroll(element, className) {
  //   // Add scroll event listener to the window object
  //   window.addEventListener("click", function() {
  //     // Check if the element has the specified class name
  //     if (element.classList.contains(className)) {
  //       // Remove the class name from the element
  //       element.classList.remove(className);
  //     }
  //   });
  // }
  
  // // Test case 1
  // const box1 = document.querySelector("#box1");
  // removeClassOnScroll(box1, "highlight");
  
  // // // Test case 2
  // const box2 = document.querySelector("#box2");
  // removeClassOnScroll(box2, "active");

////////////////////////////////////////////////////////////////////////////////////////////////////////
//4.Write a function to toggle the display of a div element on click event.

  //function for toggling on click
  
  /*function toggleOnClick(element,className){
    window.addEventListener("click",function(){
      if(element.classList.contains(className)){
          element.classList.toggle(className);
      }
    }) ;
  }

  let box1=document.querySelector("#box1");
  toggleOnClick(box1,"highlight");  */

  //4th code can also be written as  

//   function toggleOnClick(divId)
//   {

//      let mydiv1=document.querySelector(divId);
      
//         if(mydiv1.style.display==="none"){
//           mydiv1.sytle.display= "block";
//         }
//         else{
//           mydiv1.sytle.display= "none";
//         }
      
//  }

/*function toggleDivDisplayOnClick(divId) {
  const div = document.getElementById(divId);
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}*/

//////////////////////////////////////////////////////////////////////////////

//5.5. **Write a function to validate a form on submit event.**

// function validateForm(event) {
//   event.preventDefault(); // prevent the form from submitting
//   const form = event.target; // get the form element
//   let isValid = true; // initialize a flag for validation
  
//   // loop through the form elements
//   for (let i = 0; i < form.elements.length; i++) {
//     const input = form.elements[i];
//     const value = input.value.trim(); // trim the input value
    
//     // if input is required and empty
//     if (input.hasAttribute("required") && value === "") {
//       isValid = false; // mark validation as failed
//       input.classList.add("invalid"); // add invalid class to input
//     } else {
//       input.classList.remove("invalid"); // remove invalid class from input
//     }
//   }
  
//   // show success or error message based on validation
//   const message = document.getElementById("message");
//   if (isValid) {
//     message.classList.remove("error");
//     message.innerText = "Form submitted successfully!";
//   } else {
//     message.classList.add("error");
//     message.innerText = "Please fill out all required fields.";
//   }
// }

// // Test case: attach the validateForm function to the submit event of a form element
// const form = document.getElementById("myForm");
// form.addEventListener("submit", validateForm);


// let newele=document.getElementsByClassName("heading");

//  function changeclass(){
//   let element=document.getElementsByClassName("heading");
//   element.classList.add("active");
//  }



// function addClassOnMouseOver(elementID, className) {

//   const element = document.getElementById(elementID);

//   // Add an event listener to the element for the "mouseover" event
//   element.addEventListener("mouseover", () => {
//     // Add the class name to the element
//     element.classList.add(className);
//   });
// }

// function removeclassonclick(elementID, className){

//   const element=document.getElementById(elementID);
//   element.addEventListener("click",() =>{
//     element.classList.remove(className);
//   })
// }

// // Test case
// // Add the "active" class to the "button" element on mouseover
// addClassOnMouseOver("button", "active");
// removeclassonclick("button","active");

 //////// //exercise 3 of 4////////////////////////////////////

function  removeOnScroll(element, className){
  window.addEventListener("click", ()=>{
    if(element.classList.contains(className)){
      element.classList.remove(className);
    }
  });
}


const box1=document.getElementById("box1");
removeOnScroll(box1,"hightLight");

const box2=document.getElementById("box2");
removeOnScroll(box2,"active");
