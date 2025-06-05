import { useApp } from "../Contexts/AppContext"
import { weatherCode } from "../HelperFunctions/translateCode"

export const CityCard=()=>{
    const {city,weatherData,setModalIsOpened} =useApp()
    return(
        <div className="text-white relative h-full">
            <button className="cursor-pointer text-[12px]" onClick={()=>setModalIsOpened(true)}>{city ? city : 'Város neve'}</button>
            {weatherData && 
            <>
            <p className="text-[48px]">{weatherData.current.temperature_2m} °C</p>
            <p className="text-[16px]">{weatherCode(weatherData.current.weather_code)}</p>
            </>
            }
           <span className="absolute bottom-0 hidden md:block">Péntek Máté Miklós</span>
        </div>
    )
}