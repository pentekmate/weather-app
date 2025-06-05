
import "./App.css"
import { useApp } from './Contexts/AppContext'
import { CityCard } from "./UI/CityCard"
import { Modal } from "./UI/Modal"
import { WeeklyForecast } from "./UI/WeeklyForecast"

function App() {
  const {modalIsOpened,weatherData} = useApp()
  return (
   <div 
   className='w-screen  h-screen lg::px-[339px] md:px-[150px] px-6 md:gap-[156px] gap-[60px] flex-col flex md:flex-row justify-center md:py-[100px] py-[51px] bg-gradient-to-r from-blue-200 to-blue-100 relative'>
    {modalIsOpened && (
      <Modal></Modal>
    )}
      
      <div className="md:w-1/4 flex md:justify-end w-full">
         <CityCard></CityCard> 
      </div> 
     

      <div className="md:w-3/4 w-full">
        {
          weatherData &&  <WeeklyForecast></WeeklyForecast>
        }
         
      </div>
        <span className="block md:hidden absolute left-1/2 bottom-0 w-2/4 text-white transform -translate-x-1/2">Péntek Máté Miklós</span>
   </div>
  )
}

export default App
