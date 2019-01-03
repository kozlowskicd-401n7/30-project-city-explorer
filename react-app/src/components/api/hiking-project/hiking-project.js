import React from 'react';

const HikingProjectAPI = (props) => {
  return (
    <section>
      <h3>Results from the Hiking Project API</h3>
      <ul className="trails-results">
      {
        Object.keys(props.hikingData).map(key => {
          return (
      <li>
        <p>Hike Name: <a href={props.hikingData[key].trail_url}>{props.hikingData[key].name}</a>, Location: {props.hikingData[key].location}, Distance: {props.hikingData[key].length} miles</p>
        <p>On {props.hikingData[key].condition_date} at {props.hikingData[key].condition_time}, trail conditions were reported as: {props.hikingData[key].conditions}</p>
        <p>This trail has a rating of {props.hikingData[key].stars} stars (out of {props.hikingData[key].star_votes} votes)</p>
        <p>{props.hikingData[key].summary}</p>
      </li>
          )
      })
    }
      </ul>
    </section>
  )
}

export default HikingProjectAPI;