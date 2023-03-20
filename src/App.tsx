import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { result,data } from "./types/Type";



const App: React.FC = () => {

  const[data, setData] = useState<data>();
  const[search, setSearch] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  const getWeather = async () => {
    const result : result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=1216eccb0aeb4260333ce7c0bb24d0df&units=metric`
    );
    setData(result.data)
  };

  const onClick = () =>{
    setSearch(false);
    getWeather();
  }

  return (
    <div>
      {search ? (
        <form onSubmit={onClick} className="main">
          <input className="input" onChange={(e: React.ChangeEvent<HTMLInputElement>):void =>(setSearchText(e.target.value))} placeholder="City Name"/>
          <button className="getWeather" type="submit">Get Weather</button>
        </form>
      ) : (
        <div className="main">
          <h1>City Name: {data?.name}</h1>
          <p>Temp: {data?.main?.temp}</p>
          <img src={`https://openweathermap.org/img/wn/${data?.weather && data?.weather[0].icon}@2x.png`} alt="img"/>
          <button className="goBack" onClick={()=>(setSearch(true))}>Go Back</button>
        </div>
      )}
    </div>
  );
};  
//img nin içindeki data.weather dizi olduğu için ve dizinin sayısı belli olmadığı için o dizi var ise iconu al diyoruz.
export default App;
