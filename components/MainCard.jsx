// left side component of the current weather coniditons display
import Image from "next/image";
import { ctoF } from "../services/converters";

const MainCard = ({
    city,
    country,
    description,
    iconName,
    unitSystem,
    weatherData,
}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-l-3xl pb-4">
            <h1 className="text-[38px] mt-8 font-bold">
                {city}, {country}
            </h1>
            <p className="text-[24px] mt-20px font-normal capitalize">{description}</p>
            <Image
                width="300"
                height="300"
                src={`/icons/${iconName}.svg`}
                alt="weatherIcon"
                className="mt-8 md:w-300 md:h-300  w-200 h-200 animate-pulse"
            />
            <h1 className="text-[84px] font-extrabold">
                {unitSystem == "metric"
                    ? Math.round(weatherData.main.feels_like)
                    : Math.round(ctoF(weatherData.main.feels_like))}
                °{unitSystem == "metric" ? "C" : "F"}
            </h1>

        </div>
    );
};
export default MainCard