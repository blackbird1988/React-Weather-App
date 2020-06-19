import React,{useState} from 'react';
import React from 'react';
import './App.css';
import Form from './Form.js';
import Weather from './Weather';



function App () {

    const [weather,setWeather] = useState([])
    
    const APIKEY = '7afc6db98cb47402d3040cea09e41445'

      async function fetchData(e) {
        
        e.preventDefault()
         
          const city = e.target.elements.city.value
          
          const country = e.target.elements.country.value
          
          const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      
      .then( res => res.json())
      
      .then(data => data)
      
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please Type A City And Country"
      }
      )}
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
  
}

export default App;
