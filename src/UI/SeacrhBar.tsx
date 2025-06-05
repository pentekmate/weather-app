import axios from "axios";
import {useEffect, useState } from "react"
import { useApp } from "../Contexts/AppContext";
import type { CityResult, CoordsType } from "../Contexts/AppContextTypes";

export const SearchBar = ()=>{
    const {setCoords,setCity,cityResults,setCityResults,setModalIsOpened} =useApp()
    const [searchQuery,setSearchQuerry]=useState<string>("")

    const handleChange=(e:string)=>{
        setSearchQuerry(e)
    }
    useEffect(()=>{
        fetchCityResults()
    },[searchQuery])


    const fetchCityResults = async ()=>{
        try {
        const response = await axios.get(
          `${import.meta.env.VITE_FETCHCITYURL}=${searchQuery}`
        );
        setCityResults(response.data.results)
      } catch (error) {
        console.error("Hiba történt az API hívás során:", error);
      }
    };

    const handlePickedCity = (item:CityResult)=>{
      const cords :CoordsType = {latitude:item.latitude,longitude:item.latitude}
      setCity(item.name)
      setSearchQuerry(item.name)
      setCoords(cords)

      localStorage.setItem('cityName',item.name)
      localStorage.setItem('coords',JSON.stringify(cords))
      setModalIsOpened(false)
    }
    

    return(
        <div className="relative flex flex-col items-center justify-center px-18 py-4">
            <div className="cursor-pointer right-0 top-0 absolute" onClick={()=>setModalIsOpened(false)}>X</div>
            <div className="w-full">
              <label htmlFor="citySearch">Írd be a keresett város nevét.</label>
              <input className="border w-full focus:outline-blue-200 p-2 border-blue-100" type="text" name="citySearch" onChange={(e)=>handleChange(e.target.value)} value={searchQuery} />
            </div>
            {
             cityResults && 
             <div className="w-full bg-white ">
              {              
              cityResults.map((item:CityResult)=>
                  <p key={item.id} onClick={()=>handlePickedCity(item)} className="p-2 w-full hover:bg-gray-200 cursor-pointer">{item.name}</p>
              )}

             </div>
            }
        </div>
    )
}