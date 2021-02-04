import React, { useState } from "react";

export default function ConvertTemperature(props) {
    const [units, setUnits] = useState("celsius");

    function handleFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function handleCelsius(event) {
        event.preventDefault();
        setUnits("celsius");
    }

    if(units === "celsius"){
    return(
        <span className="ConvertTemperature">
            <h1 id="main-temperature" className="celsius">
                {props.temp}
            </h1>
            <span className="temperature-type">
                ºC
                <span> | </span>
                <a href="/" className="fahrenheit" onClick={handleFahrenheit}>
                ºF
                </a>
            </span>
        </span>
        );
    }else{
        let fahrenheit = Math.round(props.temp * 9/5)+32;
        return(
        <span className="ConvertTemperature">
            <h1 id="main-temperature" className="celsius">
                {fahrenheit}
            </h1>
            <span className="temperature-type">
                <a href="/" className="celsius" onClick={handleCelsius}>
                ºC
                </a>
                <span> | </span>
                ºF
            </span>
        </span>
        );
    }
}