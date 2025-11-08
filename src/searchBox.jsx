import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react"
let searchBoxStyle = {
    marginBottom : "2rem"
}
export default function SearchBox({updateInfo}) {
const api_Url="http://api.openweathermap.org/data/2.5/weather";
const api_Key= "a84032150ae31e3f1b232c6bf267d41e";
let [input,setInput] =useState("");
let [hasError,setHasError] = useState(false);
let getWeatherInfo = async()=>{
    try{
        let response= await fetch(`${api_Url}?q=${input}&appid=${api_Key}&units=metric`);
        let jsonResponse = await response.json();
       console.log(jsonResponse);
        let Response ={
          city:input,
          temp:jsonResponse.main.temp,
          mintemp:jsonResponse.main.temp_min,
          maxtemp:jsonResponse.main.temp_max,
          feelsLike:jsonResponse.main.feels_like,
          humidity:jsonResponse.main.humidity,
        }
        console.log(Response);
        return Response;
  }catch(err)
    {
    throw err;

    }
    } ;

let handleChange =(event)=>{
 setInput(event.target.value);
}
let handleSubmit=async (event)=>{
    try{
        console.log(input);
    
        event.preventDefault();
        setInput("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
    } catch(err){
        setHasError(true);
    }
  
}
    return (
        <div className="searchBox" style={searchBoxStyle} >
            <h3>Search Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="city name*" variant="outlined" placeholder="city name*" onChange={handleChange} value={input} />
            <br></br><br></br>
            <Button variant="contained"  type="submit" endIcon={<SendIcon />}>
                Send
            </Button>
           {hasError && <p style={{color:"red"}}>No such place in our APi</p>} 
            </form>
           
        </div>
    )
}