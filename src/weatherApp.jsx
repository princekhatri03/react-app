import SearchBox from "./searchBox.jsx"
import Info_box from "./info_box.jsx"
import {useState} from "react"

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        temp:22.4,
        mintemp:3,
        maxtemp:5,
        feelsLike:22,
        humidity:10,
       })
    let updateInfo =(info)=>{
   setWeatherInfo(info);
    }
    return (
        <div>
            <h1>Weather React App</h1>
            <SearchBox updateInfo={updateInfo} />
            <Info_box infoWeather={weatherInfo} />
        </div>
    )
}