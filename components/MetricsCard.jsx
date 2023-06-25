// card for displaying specific information about weather
'use client'
import Image from "next/image";

const MetricsCard = ({ title, iconSrc, metric, unit }) => {
    return (
        <div className="bg-white p-8 text-right rounded-2xl shadow-lg hover:scale-105 duration-500 ">
            <p className="text-xl font-semibold">{title}</p>
            <div className="grid grid-cols-2">
                <Image width="120" height="120" src={iconSrc} alt="weatherIcon" />
                <div>
                    <h1 className="text-4xl font-bold">{metric}</h1>
                    <p className="font-semibold">{unit}</p>
                </div>
            </div>
        </div>
    );
};

export default MetricsCard