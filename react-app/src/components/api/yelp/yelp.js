import React from 'react';

const YelpAPI = (props) => {
  return (
    <section className="yelp-container">
      <h3>Results from the Yelp API</h3>
      <ul className="yelp-results">
      {
        Object.keys(props.yelpData).map(key => {
          return(
            <li>
            <a href={props.yelpData[key].url}>{props.yelpData[key].name}</a>
            <p>The average rating is {props.yelpData[key].rating} out of 5 and the average cost is {props.yelpData[key].price} out of 4</p>
            <img src={props.yelpData[key].image_url} alt="Yelp" />
          </li>
          )
        })
      }
      </ul>
    </section>
  )
}

export default YelpAPI;