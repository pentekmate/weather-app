export type AppContextProviderTypes = {
  children: React.ReactNode;
};

export type AppContextType={
    city:string,
    setCity: (city: string) => void;
    cityResults: CityResult[];
    setCityResults: (results: CityResult[]) => void;
    modalIsOpened:boolean,
    setModalIsOpened:(isOpened:boolean)=>void;
    setCoords:(coords:CoordsType)=>void
    weatherData:WeatherApiResponse | null;
    // setWeatherData:(data:WeatherApiResponse)=>void;
}

export type CoordsType={
  longitude:number,
  latitude:number
}

export type CityResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
};


export type WeatherApiResponse = {
  current: {
    interval: number;
    temperature_2m: number;
    time: string; 
    weather_code: number;
  };
  current_units: {
    interval: string;
    temperature_2m: string; 
    time: string;
    weather_code: string; 
  };
  daily: {
    precipitation_probability_max: number[]; 
    temperature_2m_max: number[];
    temperature_2m_min: number[]; 
    time: string[]; 
    weather_code: number[]; 
  };
  daily_units: {
    precipitation_probability_max: string; 
    temperature_2m_max: string;
    temperature_2m_min: string; 
    time: string; 
    weather_code: string; 
  };
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};

