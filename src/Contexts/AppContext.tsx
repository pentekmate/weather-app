import { createContext, useContext, useEffect, useState } from "react";
import type { AppContextProviderTypes, AppContextType, CityResult, CoordsType, WeatherApiResponse } from "./AppContextTypes";
import axios from "axios";


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppContextProviderTypes) => {
  const [city, setCity] = useState<string>("");
  const [cityResults,setCityResults]=useState<CityResult[]>([])
  const [coords,setCoords]=useState<CoordsType | null>(null)
  const [modalIsOpened,setModalIsOpened]=useState<boolean>(false)
  const [weatherData,setWeatherData]=useState<WeatherApiResponse | null>(null)


  useEffect(()=>{
    const storedCityName = localStorage.getItem('cityName')
    const storedCoords = localStorage.getItem('coords')
    if(storedCityName && storedCoords){
      setCity(storedCityName)
      setCoords(JSON.parse(storedCoords))
    }
    else{
      setModalIsOpened(true)
    }
  },[])

  useEffect(()=>{
    if(coords){
      const {latitude,longitude}=coords
      fetchWeather(latitude,longitude)
    }
  
  },[coords])
    

    const fetchWeather = async (latitude: number, longitude: number) => {
      const baseUrl = import.meta.env.VITE_FORECAST_URL;
      const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code&timezone=auto`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Hiba történt az API hívás során:", error);
      }
    };

  return (
    <AppContext.Provider value={{ weatherData,city, setCity,cityResults,setCityResults,setModalIsOpened,modalIsOpened,setCoords}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
