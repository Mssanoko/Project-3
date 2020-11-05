import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search/search';
function App() {
  const [searchTerm, setSearchTerm] =  useState("");
  const [weatherData, setWeatherData] = useState([]);
  const getTranslate = async () => {
    const APIKey = "166a433c57516f51dfab1f7edaed8413";
    const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + APIKey;
    const response = await fetch(queryURL);
    const results = await response.json();
    console.log(results);
    setWeatherData(results.weather);
  }
    return (
      <div className="App">
        <Header/>
        <main className="site-width-limit main">
        <Search getWeatherData={getWeatherData} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {weatherData.length !== 0 ? (<div>There is weather data in state</div>) : ""}
      </main>
    </div>
  );
}
export default App;