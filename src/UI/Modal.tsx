import { useApp } from "../Contexts/AppContext"
import { SearchBar } from "./SeacrhBar"

export const Modal = ()=>{
    const {setModalIsOpened} = useApp()
    return(
        <div className="absolute top-0 w-screen left-0 md:flex md:items-center md:justify-center flex items-start justify-start max-w-screen max-h-screen h-screen z-10 bg-overlay">
               
            <div className="md:w-2/4 md:h-2/4 w-full h-full bg-white relative">
                <div className="cursor-pointer right-5 top-2 absolute z-10" onClick={()=>setModalIsOpened(false)}>X</div>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}