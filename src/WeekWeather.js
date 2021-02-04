import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeekWeather(props) {
    const [forecast, setForecast] = useState(null);
    const [ready, setReady] = useState(false);

    function showForecastCoords(response) {
        setReady(true);
        setForecast(response.data.daily)
    }

    if (ready){
       return(
        <div className="forecast row">
            {forecast.list.slice(0, 6).map(function (forecastItem) {
                return <ForecastDay data={forecastItem}/>
            })}
        </div>
        );

    }else{
        let apiKey = "92d00d73e14488658423852ecb6e0859";
        let units = "metric";
        let excludeInfo = 'current,minutely,hourly,alerts';
        let apiForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=${units}`
        axios.get(apiForecastURL).then(showForecastCoords);

        return null;
      
    }
}

