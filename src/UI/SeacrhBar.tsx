import axios from "axios";
import {useEffect, useState } from "react"
import { useApp } from "../Contexts/AppContext";
import type { CityResult, CoordsType } from "../Contexts/AppContextTypes";

export const SearchBar = ()=>{
    const {setCoords,setCity,cityResults,setCityResults,setModalIsOpened} =useApp()
    const [searchQuery,setSearchQuery]=useState<string>("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange=(e:string)=>{
        setSearchQuery(e)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
          if (searchQuery.length > 1) {
            fetchCityResults();
          }
        }, 200);

      return () => clearTimeout(timeout);
    }, [searchQuery]);



    const fetchCityResults = async ()=>{
      setLoading(true);
      setError("");
        try {
        const response = await axios.get(
          `${import.meta.env.VITE_FETCHCITYURL}=${searchQuery}`
        );
        setCityResults(response.data.results)
      } catch (error) {
        setError("Nem sikerült a városokat betölteni.");
      }
      finally{
        setLoading(false);
      }
    };

    const handlePickedCity = (item:CityResult)=>{
      const cords :CoordsType = {latitude:item.latitude,longitude:item.longitude}
      setCity(item.name)
      setSearchQuery(item.name)
      setCoords(cords)

      localStorage.setItem('cityName',item.name)
      localStorage.setItem('coords',JSON.stringify(cords))
      setModalIsOpened(false)
      setCityResults([])
    }
    
   
   

    return(
        <div className="relative flex flex-col items-center justify-center px-18 py-4">
          
            <div className="w-full">
              <label htmlFor="citySearch">Írd be a keresett város nevét.</label>
              <input  id="citySearch"  className="border w-full focus:outline-blue-200 p-2 border-blue-100" type="text" name="citySearch" onChange={(e)=>handleChange(e.target.value)} value={searchQuery} />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {loading && <p className="text-gray-500 mt-2">Betöltés...</p>}
            {!loading &&( cityResults?.length === 0 || cityResults === undefined) && searchQuery.length > 1 && (
              <p className="text-sm text-gray-500 mt-2">Nincs találat.</p>
            )}
            {
             cityResults && 
             <div className="w-full  max-h-[150px] overflow-y-scroll bg-gray-100">
              {              
              cityResults.map((item:CityResult)=>
                  <p key={item.id} onClick={()=>handlePickedCity(item)} className="p-2 w-full hover:bg-gray-200 cursor-pointer">{item.name}</p>
              )}

             </div>
            }
        </div>
    )
}