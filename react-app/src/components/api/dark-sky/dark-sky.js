import React from 'react';

const DarkSkyAPI = (props) => {
  return (
    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul className="weather-results">
      {
        Object.keys(props.weatherData).map(key => {
          return(
          <li>The forecast for {props.weatherData[key].time} is: {props.weatherData[key].forecast}</li>
          )
        })
      }
      </ul>
    </section>
  )
}

export default DarkSkyAPI;