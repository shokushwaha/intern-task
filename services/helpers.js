import {
    unixToLocalTime,
    kmToMiles,
    mpsToMph,
    timeTo12HourFormat,
} from "./converters";

// displaying windspeed either in miles per second or miles per hour based on input
export const getWindSpeed = (unitSystem, windInMps) =>
    unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

// displaying visibility either in kilometers or miles based on input
export const getVisibility = (unitSystem, visibilityInMeters) =>
    unitSystem == "metric"
        ? (visibilityInMeters / 1000).toFixed(1)
        : kmToMiles(visibilityInMeters / 1000);

// displaying time either in unix or local time based on input
export const getTime = (unitSystem, currentTime, timezone) =>
    unitSystem == "metric"
        ? unixToLocalTime(currentTime, timezone)
        : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));


// displaying time either in am or pm based on input
export const getAMPM = (unitSystem, currentTime, timezone) =>
    unitSystem === "imperial"
        ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
            ? "PM"
            : "AM"
        : "";


// displaying weak day based on input time
export const getWeekDay = (weatherData) => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekday[
        new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
    ];
};