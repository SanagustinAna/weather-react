import React, { useState } from "react";
import "./WeekWeather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeekWeather(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState(null);

    function showForecastCoords(response) {
        setForecast(response);
        setReady(true);
    }

    if (ready){
        return(
            <span className="WeekWeather">
                {forecast.data.daily.slice(1, 6).map(function (forecastItem) {
                    return <ForecastDay data={forecastItem} key={forecastItem.dt}/>
                })}
            </span>
        );
        
        
    }else{
        let apiKey = "b8460e3f37d976669c784023439cb3c3";
        let units = "metric";
        let excludeInfo = 'current,minutely,hourly,alerts';
        let apiForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=${units}`
        axios.get(apiForecastURL).then(showForecastCoords);

        return null;
      
    }
}

