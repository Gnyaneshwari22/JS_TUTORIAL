

  let API_key = "1a470564b70b20795433867f37fbd880";

async function showWeatherdata(){
    //  let lat= 15.3333;
    // let lon=74.0833;
    let city_name="Goa";


    let response=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API_key}&units=metric');

    const data= await response.json();
    console.log("weather data -> " , data);



}