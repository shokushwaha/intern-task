// component for displauing current time and date
'use client'
import { getWeekDay, getTime, getAMPM } from "../services/helpers";
const DateAndTime = ({ weatherData, unitSystem }) => {
    return (
        <div className=" text-2xl font-bold">
            <h2>
                {`${getWeekDay(weatherData)}, ${getTime(
                    unitSystem,
                    weatherData.dt,
                    weatherData.timezone
                )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
            </h2>
        </div>
    );
};

export default DateAndTime