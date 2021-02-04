import React from "react";
import WeekWeather from "./WeekWeather";
import UpdatedDate from "./UpdatedDate";
import ConvertTemperature from "./ConvertTemperature";
import "./CityData.css";

export default function CityData(props) {
    return(
        <div className="CityData card-body">
            <div className="row align-items-center py-2">
                <div className="col col-sm-3">
                    <div className="PlaceHour">
                        <p className="current-city" id="city-label">
                        {props.data.city}
                        </p>
                        <span className="date-time" id="date-label">
                        <UpdatedDate date={props.data.timestamp}/>
                        </span>
                        <span className="weather_description" id="weather-condition">
                        {props.data.description}
                        </span>
                    </div>
                </div>
                <div className="col col-sm-6">
                    <div className="CityWeather">
                    <img
                        src={props.data.icon}
                        className="main-weather"
                        id="weather-img"
                        alt="main weather"
                    />
                     <ConvertTemperature temp={props.data.temp} />
                    </div>
                </div>
                <div className="col col-sm-3">
                    <div className="WeatherDetails">
                        <p>
                            Humidity: {props.data.humidity}%
                            <br />
                            Wind: {props.data.wind} km/h
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row row-cols-6" id="week-weather">
                
            <WeekWeather day={1} latitude={props.data.latitude} longitude={props.data.longitude}/>
            <WeekWeather day={2} latitude={props.data.latitude} longitude={props.data.longitude}/>
            <WeekWeather day={3} latitude={props.data.latitude} longitude={props.data.longitude}/>
            <WeekWeather day={4} latitude={props.data.latitude} longitude={props.data.longitude}/>
            <WeekWeather day={5} latitude={props.data.latitude} longitude={props.data.longitude}/>
            <WeekWeather day={6} latitude={props.data.latitude} longitude={props.data.longitude}/>
            </div>
        </div>
    );
    
}