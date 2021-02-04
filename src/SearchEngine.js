import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import CityData from "./CityData";


export default function SearchEngine() {
    const[WeatherData, setWeatherData] = useState({load: false});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "92d00d73e14488658423852ecb6e0859";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${WeatherData.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showWeather);
  }
  function handleCity(event) {
    setWeatherData({
        city: event.target.value,
    });
  }

  function showWeather(response){
    setWeatherData({
        load: true,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
        city: response.data.name,
        description: response.data.weather[0].description,
        temp: Math.round(response.data.main.temp),
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        timestamp: new Date(response.data.dt *1000),
    })
  }
  if (WeatherData.load === true){
  return (
    <div className="SearchEngine">
        <div className="card-header text-center">
            <form className="weather-search" id="search-city" onSubmit={handleSubmit}>
                <input
                type="text"
                className="form-control"
                id="input-text"
                autoComplete="off"
                autoFocus="on"
                placeholder="Type a city..."
                onChange={handleCity}
                />
                <button type="submit" className="btn btn-primary">
                Search
                </button>
            </form>
        </div>
        <CityData data={WeatherData}/>
    </div>
  );
}else{
    return(
        <div className= "SearchEngine">
            <div className="card-header text-center">
                <form className="weather-search" id="search-city" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    className="form-control"
                    id="input-text"
                    autoComplete="off"
                    autoFocus="on"
                    placeholder="Type a city..."
                    onChange={handleCity}
                    />
                    <button type="submit" className="btn btn-primary">
                    Search
                    </button>
                </form>
            </div>
            <h1>Search a city ...</h1>
        </div>
    );
}
}

