
import React, { useState, useEffect } from 'react';
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulate fetching weather data from an API
    const fetchData = () => {
      // Assuming the weather input is { temperature: 25, conditions: "Sunny" }
      setWeather({ temperature: 25, conditions: "Sunny" });
    };

    fetchData();
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

