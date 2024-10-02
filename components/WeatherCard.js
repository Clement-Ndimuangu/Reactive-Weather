import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/partlyCloudy.svg"


function WeatherCard(props) {
  const {city, temperature, forecast} = props.data  
  let imgSrc;
  if(forecast == 'Sunny'){
    imgSrc = sunny;
  }else if(forecast == 'Cloudy'){
    imgSrc = cloudy
  }else if(forecast == 'Partly cloudy'){
    imgSrc = partlyCloudy
  }else{
    imgSrc = rainy
  }
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {imgSrc} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;