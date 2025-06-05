import { useApp } from "../Contexts/AppContext"
import { getDayName } from "../HelperFunctions/getDayName"
import { weatherCodeToIcon } from "../HelperFunctions/translateCodeToIcon"
import { LineChart } from "./Chart"


export const WeeklyForecast = ()=>{
    const {weatherData}=useApp()
    if (!weatherData || !weatherData.daily || !weatherData.daily.time) return null;

    return(
        <div className="text-white  flex flex-col gap-[14px] md:gap-[80px]  w-full">
            <div className="w-full">
                <p className="text-[13px]">7 napos előrejelzés</p>
                {weatherData && weatherData.daily.temperature_2m_max.map((_,index)=>
                <div
                    className="grid  w-full items-center md:grid-cols-3  text-[16px] md:text-[20px] 
                    grid-cols-[80px_60px_60px_1fr] overflow-x-hidden"
                    key={index}
                    >
                    <p className="md:justify-self-start">{getDayName(weatherData.daily.time[index])}</p>
                    
                    <p className="block md:hidden text-center">
                        {weatherCodeToIcon(weatherData.daily.weather_code[index])}
                    </p>
                      <p className=" flex items-start md:hidden text-center">
                       {weatherData.daily.precipitation_probability_max[index]}%
                    </p>

                    <p className="hidden md:flex w-[80px]  justify-self-center items-start space-x-2">
                        <span className="w-[20px]">{weatherCodeToIcon(weatherData.daily.weather_code[index])}</span>
                        <span>{weatherData.daily.precipitation_probability_max[index]}%</span>
                    </p>
           

                    <p className="md:justify-self-end flex gap-2">
                        <span>{weatherData.daily.temperature_2m_min[index]}°C</span>
                        <span>/</span>
                        <span>{weatherData.daily.temperature_2m_max[index]}°C</span>
                    </p>
                </div>
                
                )}
            </div>

            <LineChart></LineChart>
        </div>
    )
}