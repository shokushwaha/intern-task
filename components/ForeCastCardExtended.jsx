// card component for displaying forecast of next days
import React from 'react'
import Image from 'next/image'
import { ctoF } from '@/services/converters'
import { getWindSpeed } from '@/services/helpers'
const ForeCastCardExtended = ({ date, weather, info, wind, unitSystem }) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-gradient-to-r from-white to-slate-100 rounded-2xl shadow-lg pb-2 hover:border-b-4 border-gray-400 hover:scale-105 duration-300' >

                <span className='text-2xl font-semibold pt-2'>
                    {date.substring(0, 10)}
                </span>
                <div className='flex items-center justify-between gap-8 mt-8 mb-2'>
                    <Image
                        width="100"
                        height="100"
                        src={`/icons/${weather.icon}.svg`}
                        alt="weatherIcon"
                        className='animate-bounce'

                    />
                    <span className='text-3xl font-bold py-2 flex flex-col items-end justify-end'>
                        {weather.main}
                        <p className='text-lg font-normal capitalize'>

                            {weather.description}
                        </p>

                    </span>


                </div>

                <div className='flex items-start justify-center gap-8'>
                    <span className='flex items-center justify-center flex-col text-center'>
                        <p className='font-semibold'>
                            Min. Temp
                        </p>
                        <p className='font-bold'>
                            {unitSystem == "metric"
                                ? Math.round(info.temp_min)
                                : Math.round(ctoF(info.temp_min))}
                            °{unitSystem == "metric" ? "C" : "F"}
                        </p>
                    </span>

                    <span className='flex items-center justify-center flex-col text-center'>
                        <p className='font-semibold'>
                            Max. Temp
                        </p>
                        <p className='font-bold'>
                            {unitSystem == "metric"
                                ? Math.round(info.temp_max)
                                : Math.round(ctoF(info.temp_max))}
                            °{unitSystem == "metric" ? "C" : "F"}
                        </p>
                    </span>
                </div>
                <div className='flex items-start justify-center gap-8 mt-4'>
                    <span className='flex items-center justify-center flex-col text-center'>
                        <p className='font-semibold'>
                            Humidity
                        </p>
                        <p className='font-bold'>
                            {info.humidity}%
                        </p>
                    </span>

                    <span className='flex items-center justify-center flex-col text-center'>
                        <p className='font-semibold'>
                            Wind Speed
                        </p>
                        <p className='font-bold'>
                            {getWindSpeed(unitSystem, wind.speed)}
                            {unitSystem == "metric" ? "m/s" : "m/h"}
                        </p>
                    </span>
                </div>
            </div>

        </>
    )
}

export default ForeCastCardExtended