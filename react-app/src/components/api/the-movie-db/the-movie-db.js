import React from 'react';

const TheMovieDbAPI = (props) => {
  return (
    <section className="movie-container">
      <h3>Results from The Movie DB API</h3>
      <ul className="movies-results">
      {
        Object.keys(props.movieData).map((key, idx) => {
          return(
            <li id={idx}>
            <p><span>{props.movieData[key].title}</span> was relased on {props.movieData[key].released_on}. Out of {props.movieData[key].total_votes} total votes, {props.movieData[key].title} has an average vote of {props.movieData[key].average_votes} and a popularity score of {props.movieData[key].popularity}.</p>
            <img src={props.movieData[key].image_url} alt="Movie Poster" />
            <p>{props.movieData[key].overview}</p>
          </li>
          )
        })
      }
      </ul>
    </section>
  )
}
export default TheMovieDbAPI;