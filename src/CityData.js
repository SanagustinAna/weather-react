import React from "react";
import WeekWeather from "./WeekWeather";
import UpdatedDate from "./UpdatedDate";
import ConvertTemperature from "./ConvertTemperature";
import "./CityData.css";

export default function CityData(props) {
    const codeMapping = {
        "01d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_64dp.png',
        "01n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/clear_night_light_color_64dp.png',
        "02d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_64dp.png',
        "02n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_light_color_64dp.png',
        "03d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_day_light_color_64dp.png',
        "03n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_night_light_color_64dp.png',
        "04d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_64dp.png',
        "04n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_64dp.png',
        "09d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_light_color_64dp.png',
        "09n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_light_color_64dp.png',
        "10d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_64dp.png',
        "10n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_64dp.png',
        "11d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_64dp.png',
        "11n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_64dp.png',
        "13d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_light_color_64dp.png',
        "13n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_light_color_64dp.png',
        "50d": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_light_color_64dp.png',
        "50n": 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_light_color_64dp.png'
    }
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
                        <img src={codeMapping[props.data.icon]} alt="main-weather" />
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
            <div className="row justify-content-md-center">
                <WeekWeather latitude={props.data.latitude} longitude={props.data.longitude}/>
            </div>
        </div>
    );
    
}