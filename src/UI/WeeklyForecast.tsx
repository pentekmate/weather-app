import { useApp } from "../Contexts/AppContext"
import { getDayName } from "../HelperFunctions/getDayName"
import { LineChart } from "./Chart"


export const WeeklyForecast = ()=>{
    const {weatherData}=useApp()
    return(
        <div className="text-white w-full">
            <p>7 napos előrejelzés</p>
            {weatherData && weatherData.daily.temperature_2m_max.map((item,index)=>
            <div className="flex w-full gap-4" key={index}>
                <p>{getDayName(weatherData.daily.time[index])}</p>
                <p>{weatherData.daily.precipitation_probability_max[index]}%</p>
                <p>{weatherData.daily.temperature_2m_min[index]}°C/{weatherData.daily.temperature_2m_max[index]}°C</p>
            </div>
            
            )}

            <LineChart></LineChart>
        </div>
    )
}