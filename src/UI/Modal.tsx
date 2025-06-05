import { SearchBar } from "./SeacrhBar"

export const Modal = ()=>{
    return(
        <div className="absolute bg-white w-2/4 h-2/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SearchBar></SearchBar>
        </div>
    )
}