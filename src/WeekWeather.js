import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function WeekWeather(props) {
    if(props.latitude !== null && props.longitude !== null){
        getForecast(props);
    }
    const [min_temperature, setMin_Temperature] = useState();
    const [max_temperature, setMax_Temperature] = useState();
    const [weekDay, setweekDay] = useState(null);
    const [forecastIcon, setForecastIcon] = useState(null);

    function getForecast(props) {
        let apiKey = "c2914b747057d9a78dba2c40cc233469";
        let units = "metric";
        let excludeInfo = 'current,minutely,hourly,alerts';
        let apiForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=${units}`
        axios.get(apiForecastURL).then(showForecastCoords);
    }

    function getWeekDay(timestamp){
        let date = new Date(timestamp*1000);
        let day = date.getDay();
        let daysArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
        let nameDay = daysArray[day];
        
        return nameDay;
    }

     function showForecastCoords(response) {
        let day_info = response.data.daily[props.day];
        let dateTime = day_info.dt;
        let forecastId = day_info.weather[0].icon;
        setMax_Temperature(Math.round(day_info.temp.max));
        setMin_Temperature(Math.round(day_info.temp.min));
        setweekDay(getWeekDay(dateTime));
        setForecastIcon(`https://openweathermap.org/img/wn/${forecastId}@2x.png`);
    }

    return(
        <div className="col text-center" id='day-weather'>
            <p className="day-name">{weekDay}</p>
            <img src={forecastIcon} id="forecast-icon" alt="Forecast icon"/>
            <p id="week-temperature"><strong><span className="celsius" id="max-temp">{max_temperature}</span>º</strong>  <span className="celsius" id="min-temp">{min_temperature}</span>º</p>      
        </div>
    );
}

