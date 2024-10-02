import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/partlyCloudy.svg"


function Location(props){
    const {location,data, setLocation} = props
    let newCity = data.find(city=> city.city == location)
    let imgSrc;
    let forecast = newCity.forecast;
    if(forecast == 'Sunny'){
      imgSrc = sunny;
    }else if(forecast == 'Cloudy'){
      imgSrc = cloudy
    }else if(forecast == 'Partly cloudy'){
      imgSrc = partlyCloudy
    }else{
      imgSrc = rainy
    }
    
    return(
        <div className = "card">
            <h3>Your Location Weather</h3>
            <div className = "img-container">
                <img className="card-img-top" src = {imgSrc} alt="Card image cap" id = "icon"/>
            </div>
            <div class="card-body">
                <h3 className="card-title">The weather in {newCity.city} is</h3>
                <h5 className="card-text">{newCity.temperature} C</h5>
                <h5 className="card-text">It is {newCity.forecast} today.</h5>
            </div>
        </div>
      );
}

export default Location;