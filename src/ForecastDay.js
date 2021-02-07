import React from "react";

export default function ForecastDay(props) {
    const codeMapping = {
        "01d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_32dp.png',
        "01n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/clear_night_light_color_32dp.png',
        "02d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_32dp.png',
        "02n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_light_color_32dp.png',
        "03d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_day_light_color_32dp.png',
        "03n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_night_light_color_32dp.png',
        "04d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_32dp.png',
        "04n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_32dp.png',
        "09d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_light_color_32dp.png',
        "09n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_light_color_32dp.png',
        "10d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_32dp.png',
        "10n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_32dp.png',
        "11d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_32dp.png',
        "11n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_32dp.png',
        "13d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_light_color_32dp.png',
        "13n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_light_color_32dp.png',
        "50d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_light_color_32dp.png',
        "50n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_light_color_32dp.png'
    }
    let daysArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    let date = new Date(props.data.dt*1000);
    let forecastId = props.data.weather[0].icon;
    let forecastIcon = codeMapping[forecastId];
    let weekDay = daysArray[date.getDay()];
    
    

    return(
        <div className="ForecastDay col text-center">
            <p className="day-name">{weekDay}</p>
            <img src={forecastIcon} id="forecast-icon" alt="Forecast icon"/>
            <p id="week-temperature"><strong><span className="celsius" id="max-temp">{Math.round(props.data.temp.max)}</span>º</strong>  <span className="celsius" id="min-temp">{Math.round(props.data.temp.min)}</span>º</p>      
        </div>
    );
    
}