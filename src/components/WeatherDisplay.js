
import React from 'react';

function WeatherDisplay({ weather }) {
  const temperatureStyle = {
    color: weather.temperature > 20 ? 'red' : 'blue'
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: <span style={temperatureStyle}>{weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
