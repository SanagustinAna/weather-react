import React, { useState } from "react";

export default function ForecasrDay(props) {
    const[forecastDetails, setForecastDetails] = useState(null);
    let daysArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    let date = new Date(props.data.dt*1000);
    let forecastId = props.data.weather[0].icon;
    setForecastDetails({
        max_temperature: Math.round(props.data.temp.max),
        min_temperature: Math.round(props.data.temp.min),
        weekDay: daysArray[date.getDay()],
        forecastIcon: `https://openweathermap.org/img/wn/${forecastId}@2x.png`,
    })
    
    return(
        <div className="col text-center" id='day-weather'>
            <p className="day-name">{forecastDetails.weekDay}</p>
            <img src={forecastDetails.forecastIcon} id="forecast-icon" alt="Forecast icon"/>
            <p id="week-temperature"><strong><span className="celsius" id="max-temp">{forecastDetails.max_temperature}</span>º</strong>  <span className="celsius" id="min-temp">{forecastDetails.min_temperature}</span>º</p>      
        </div>
    );
    
}