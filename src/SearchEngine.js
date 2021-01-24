import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import WeekWeather from "./WeekWeather";

export default function SearchEngine() {
    const [city, setCity] = useState(null);
    const [weatherDetails, setweatherDetails] = useState(null);
    const [icon, setIcon] = useState(null);
    const [load, setLoad] = useState(false);
    const [searchCity, setSearchCity] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [temp, setTemp] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoad(false);
    let apiKey = "b8460e3f37d976669c784023439cb3c3";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showWeather);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response){
      setLoad(true);
      setLatitude(response.data.coord.lat);
      setLongitude(response.data.coord.lon);
      setSearchCity(response.data.name);
      setWeatherDescription(response.data.weather[0].description);
      setTemp(Math.round(response.data.main.temp));
      setweatherDetails(
      <p>
            Precipitations:{" "}
            <span id="precipitations-data">{response.data.clouds.all}</span>
            %
            <br />
            Humidity:{" "}
            <span id="humidity-data">
            {Math.round(response.data.main.humidity)}
            </span>
            %
            <br />
            Wind:{" "}
            <span id="wind-data">
            {Math.round(response.data.wind.speed)}
            </span>{" "}
            km/h
        </p>
      );
      setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }
  if (load === true){
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
                <button type="button" className="btn btn-secondary" id="current-info">
                Current
                </button>
            </form>
        </div>
        <div className="card-body">
            <div className="row align-items-center py-2">
                <div className="col col-sm-3">
                    <div className="PlaceHour">
                        <p className="current-city" id="city-label">
                            {searchCity}
                        </p>
                        <span className="date-time" id="date-label">
                        Sunday, 14:00
                        </span>
                        <span className="weather_description" id="weather-condition">
                        {weatherDescription}
                        </span>
                    </div>
                </div>
                <div className="col col-sm-6">
                    <div className="CityWeather">
                    <img
                        src={icon}
                        className="main-weather"
                        id="weather-img"
                        alt="main weather"
                    />
                    <h1 id="main-temperature" className="celsius">
                        {temp}
                    </h1>
                    <span className="temperature-type">
                        <a href="." className="active" id="temperature-celsius">
                        ºC
                        </a>
                        <span> | </span>
                        <a href="." id="temperature-farenheit">
                        ºF
                        </a>
                    </span>
                    </div>
                </div>
                <div className="col col-sm-3">
                    <div className="WeatherDetails">
                     {weatherDetails}
                    </div>
                </div>
            </div>
            <hr />
            <div className="row row-cols-6" id="week-weather">
            <WeekWeather day={1} latitude={latitude} longitude={longitude}/>
            <WeekWeather day={2} latitude={latitude} longitude={longitude}/>
            <WeekWeather day={3} latitude={latitude} longitude={longitude}/>
            <WeekWeather day={4} latitude={latitude} longitude={longitude}/>
            <WeekWeather day={5} latitude={latitude} longitude={longitude}/>
            <WeekWeather day={6} latitude={latitude} longitude={longitude}/>
            </div>
        </div>
    </div>
  );
}else{
    return(
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
                <button type="button" className="btn btn-secondary" id="current-info">
                Current
                </button>
            </form>
        </div>
        <div className="card-body">
            <div className="row align-items-center py-2">
                <div className="col col-sm-3">
                    <div className="PlaceHour">
                        <p className="current-city" id="city-label">
                        Madrid
                        </p>
                        <span className="date-time" id="date-label">
                        Sunday, 14:00
                        </span>
                        <span className="weather_description" id="weather-condition">
                        Sunny
                        </span>
                    </div>
                </div>
                <div className="col col-sm-6">
                    <div className="CityWeather">
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        className="main-weather"
                        id="weather-img"
                        alt="main weather"
                    />
                    <h1 id="main-temperature" className="celsius">
                        18
                    </h1>
                    <span className="temperature-type">
                        <a href="." className="active" id="temperature-celsius">
                        ºC
                        </a>
                        <span> | </span>
                        <a href="." id="temperature-farenheit">
                        ºF
                        </a>
                    </span>
                    </div>
                </div>
                <div className="col col-sm-3">
                    <div className="WeatherDetails">
                        <p>
                            Precipitations:{" "}
                            <span id="precipitations-data">20</span>
                            %
                            <br />
                            Humidity:{" "}
                            <span id="humidity-data">
                            15
                            </span>
                            %
                            <br />
                            Wind:{" "}
                            <span id="wind-data">
                            2
                            </span>{" "}
                            km/h
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row row-cols-6" id="week-weather">
            </div>
        </div>
    </div>
    );
}
}

