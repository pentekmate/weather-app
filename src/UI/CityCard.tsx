import { useApp } from "../Contexts/AppContext"
import { weatherCode } from "../HelperFunctions/translateCode"

export const CityCard=()=>{
    const {city,weatherData,setModalIsOpened} =useApp()
    return(
        <div className="text-white relative h-full">
            <button onClick={()=>setModalIsOpened(true)}>{city ? city : 'Város neve'}</button>
            {weatherData && 
            <>
            <p className="text-[50px]">{weatherData.current.temperature_2m} °C</p>
            <p className="text-[19px]">{weatherCode(weatherData.current.weather_code)}</p>
            </>
            }
            <span className="absolute bottom-0">Péntek Máté Miklós</span>
        </div>
    )
}