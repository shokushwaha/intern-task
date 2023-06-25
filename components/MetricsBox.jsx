// right side component of the current weather coniditons display
'use client'
import { degToCompass } from "../services/converters";
import {
    getTime,
    getAMPM,
    getVisibility,
    getWindSpeed,
} from "../services/helpers";
import { ctoF } from "../services/converters";
import MetricsCard from "./MetricsCard";
const MetricsBox = ({ weatherData, unitSystem }) => {
    return (
        <div className="grid  md:grid-cols-3 gap-8 mt-8 ">
            <MetricsCard
                title={"Min Temperature"}
                iconSrc={"/icons/lowtemp.png"}
                metric={unitSystem == "metric" ?
                    Math.round(weatherData.main.temp_min) :
                    Math.round(ctoF(weatherData.main.temp_min))
                }
                unit={unitSystem == "metric" ? "°C" : "°F"}
            />
            <MetricsCard
                title={"Max Temperature"}
                iconSrc={"/icons/hightemp.png"}
                metric={unitSystem == "metric" ?
                    Math.round(weatherData.main.temp_max) :
                    Math.round(ctoF(weatherData.main.temp_max))
                }
                unit={unitSystem == "metric" ? "°C" : "°F"}
            />
            <MetricsCard
                title={"Humidity"}
                iconSrc={"/icons/humidity.png"}
                metric={weatherData.main.humidity}
                unit={"%"}
            />
            <MetricsCard
                title={"Wind speed"}
                iconSrc={"/icons/wind.png"}
                metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
                unit={unitSystem == "metric" ? "m/s" : "m/h"}
            />
            <MetricsCard
                title={"Wind direction"}
                iconSrc={"/icons/compass.png"}
                metric={degToCompass(weatherData.wind.deg)}
            />
            <MetricsCard
                title={"Visibility"}
                iconSrc={"/icons/binocular.png"}
                metric={getVisibility(unitSystem, weatherData.visibility)}
                unit={unitSystem == "metric" ? "km" : "miles"}
            />


            <MetricsCard
                title={"Sunrise"}
                iconSrc={"/icons/sunrise.png"}
                metric={getTime(
                    unitSystem,
                    weatherData.sys.sunrise,
                    weatherData.timezone
                )}
                unit={getAMPM(
                    unitSystem,
                    weatherData.sys.sunrise,
                    weatherData.timezone
                )}
            />
            <MetricsCard
                title={"Sunset"}
                iconSrc={"/icons/sunset.png"}
                metric={getTime(
                    unitSystem,
                    weatherData.sys.sunset,
                    weatherData.timezone
                )}
                unit={getAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
            />
        </div>
    );
};


export default MetricsBox