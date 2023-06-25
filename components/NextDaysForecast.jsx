// component to display the forecast of coming hours and days
import React, { useState, useEffect } from 'react'
import ForeCastCard from './ForeCastCard'
import ForeCastCardExtended from './ForeCastCardExtended'
import { motion } from 'framer-motion'
const NextDaysForecast = ({ forecast, unitSystem }) => {


    return (
        <>
            <div className='flex flex-col gap-4 items-start justify-center w-4/5 mx-auto'>
                <div className='text-4xl font-bold border-b-2 border-gray-400 pb-2 pr-4 mb-4'>
                    Extended 12 Hours Forecast
                </div>
                <motion.div
                    className='grid grid-cols-1  gap-4 pb-8 w-full  md:grid-cols-4'
                    initial={{ opacity: 0, x: "-200px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    exit={{ opacity: 0, x: "-200px" }}
                    transition={{ duration: 1 }}
                >

                    <ForeCastCard
                        date={forecast[0].dt_txt}
                        weather={forecast[0].weather[0]}
                        info={forecast[0].main}
                        unitSystem={unitSystem}
                    />
                    <ForeCastCard
                        date={forecast[1].dt_txt}
                        weather={forecast[1].weather[0]}
                        info={forecast[1].main}
                        unitSystem={unitSystem}
                    />
                    <ForeCastCard
                        date={forecast[2].dt_txt}
                        weather={forecast[2].weather[0]}
                        info={forecast[2].main}
                        unitSystem={unitSystem}
                    />

                    <ForeCastCard
                        date={forecast[3].dt_txt}
                        weather={forecast[3].weather[0]}
                        info={forecast[3].main}
                        unitSystem={unitSystem}
                    />
                </motion.div>



                <div className='text-4xl font-bold border-b-2 border-gray-400 pb-2 pr-4 mb-4'>
                    Next 4 Days Forecast
                </div>
                <motion.div
                    className='grid grid-cols-1  gap-4 pb-8 w-full  md:grid-cols-4'
                    initial={{ opacity: 0, x: "-200px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    exit={{ opacity: 0, x: "-200px" }}
                    transition={{ duration: 1 }}
                >


                    <ForeCastCardExtended
                        date={forecast[8].dt_txt}
                        weather={forecast[8].weather[0]}
                        info={forecast[8].main}
                        wind={forecast[8].wind}
                        unitSystem={unitSystem}
                    />
                    <ForeCastCardExtended
                        date={forecast[16].dt_txt}
                        weather={forecast[16].weather[0]}
                        info={forecast[16].main}
                        wind={forecast[16].wind}
                        unitSystem={unitSystem}
                    />

                    <ForeCastCardExtended
                        date={forecast[24].dt_txt}
                        weather={forecast[24].weather[0]}
                        info={forecast[24].main}
                        wind={forecast[24].wind}
                        unitSystem={unitSystem}
                    />
                    <ForeCastCardExtended
                        date={forecast[32].dt_txt}
                        weather={forecast[32].weather[0]}
                        info={forecast[32].main}
                        wind={forecast[32].wind}
                        unitSystem={unitSystem}
                    />
                </motion.div>


            </div>

        </>
    )
}

export default NextDaysForecast