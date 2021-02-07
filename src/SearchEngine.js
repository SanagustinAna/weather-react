import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import CityData from "./CityData";
import Loader from "react-loader-spinner";



export default function SearchEngine() {
    const[WeatherData, setWeatherData] = useState({load: false});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b8460e3f37d976669c784023439cb3c3";
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
        icon: response.data.weather[0].icon,
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
            <div className="search_message">
                <h1><strong>Search above for the weather...</strong></h1>
                <Loader
                    type="MutatingDots"
                    color="#007bff"
                    height={100}
                    width={100}
                    secondaryColor= 'rgb(222, 124, 0)'
                 />
            </div>
        </div>
    );
}
}

