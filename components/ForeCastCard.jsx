// card component for displaying forecast of next hours
import React from 'react'
import Image from 'next/image'
import { ctoF } from '@/services/converters'
const ForeCastCard = ({ date, weather, info, unitSystem }) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg pb-2' >

                <span className='text-2xl font-semibold pt-2'>
                    {date.substring(10, 21)}
                </span>
                <span className='text-3xl font-bold py-2'>
                    {weather.main}

                </span>

                <Image
                    width="100"
                    height="100"
                    src={`/icons/${weather.icon}.svg`}
                    alt="weatherIcon"

                />

                <div className='flex items-start justify-center gap-4'>
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
            </div>

        </>
    )
}

export default ForeCastCard