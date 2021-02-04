import React from "react";

export default function  UpdatedDate(props) {
    let daysArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    let weekDay = daysArray[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hour < 10){
        hour = "0" + hour;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    return <span>{weekDay} {hour}:{minutes}</span>;
}