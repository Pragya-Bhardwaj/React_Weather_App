import {useState} from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp(){
    // const [weatherInfo, setWeatherInfo] = useState({
    //         city:"Delhi",
    //         description: "clear sky",
    //         feelsLike: 292.09,
    //         humidity: 27,
    //         temp: 293.31,
    //         tempMax: 293.31,
    //         tempMin: 293.31
    // });
    const [weatherInfo, setWeatherInfo] = useState(null);

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Pragya with &hearts;</h2>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}