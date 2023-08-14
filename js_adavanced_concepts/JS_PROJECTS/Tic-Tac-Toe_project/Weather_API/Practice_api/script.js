// my API KEY ---  1a470564b70b20795433867f37fbd880

console.log("hello ii");
const API_KEY= "1a470564b70b20795433867f37fbd880";

function renderWeatherInfo(data){
    let newele=document.createElement("p");
      newele.textContent=  "this is wind speed "+ data.wind.speed;
      document.body.appendChild(newele);
} 

async function showWeather(){
    //   let latitude=15.3333;
    //   let lomgitude=74.08333;
  try{
        let city="goa";
       const response=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data= await response.json();
        console.log("the weateher data is " , data);

    //   let newele=document.createElement("p");
    //   newele.textContent=  "this is wind speed "+ data.wind.speed;
    //   let newelement=document.createElement("p");
    //   document.body.appendChild(newele);
    //   newelement.textContent= "this is temp "+ data.main.temp;
    //   document.body.appendChild(newelement);

    renderWeatherInfo(data);
  }
    catch(err)
    {
        //handle the error 
    }
}
showWeather();

async function getCUstomWeatherDetails(){
      try{
            let latitide =75.34673372;
            let longitude=67.2324436547;

            let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitide}&lon=${longitude}&appid=${API_KEY}`);
            const data= await response.json();
            console.log("the weather dta is ==>" ,data); 
            renderWeatherInfo(data);
      }
      catch(err){
        console.log("enter valid api key",err);

        
      }    
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geo location support");
    }
}

function showPosition(position){
    let lat=position.coords.lattitide;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

getLocation();
getCUstomWeatherDetails();

//77.6208384
