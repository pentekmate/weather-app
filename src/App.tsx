
import "./App.css"
import { useApp } from './Contexts/AppContext'
import { CityCard } from "./UI/CityCard"
import { Modal } from "./UI/Modal"
import { WeeklyForecast } from "./UI/WeeklyForecast"

function App() {
  const {modalIsOpened} = useApp()
  return (
   <div className='w-screen h-screen flex justify-center bg-gradient-to-r from-blue-200 to-blue-100 relative'>
    {modalIsOpened && (
      <Modal></Modal>
    )}
      <div>
        <CityCard></CityCard>
      </div>

      <div>
          <WeeklyForecast></WeeklyForecast>
      </div>
   </div>
  )
}

export default App
