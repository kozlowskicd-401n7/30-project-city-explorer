import React from 'react';
import DarkSkyAPI from './dark-sky/dark-sky.js';
import HikingProjectAPI from './hiking-project/hiking-project.js';
import MeetupAPI from './meetup/meetup.js';
import TheMovieDbAPI from './the-movie-db/the-movie-db.js';
import YelpAPI from './yelp/yelp.js';
import superagent from 'superagent';

class AllAPIs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getResource = (resource) => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/${resource}`)
    .query({data: this.props.rawData})
    .then(results => {
      this.setState({[resource]: results});
      return results;
    })
    .catch(err => {console.log(err)});
  }

  render() {
  switch(this.props.display) {
    case 'hide':
      return <div />
    case 'show':
      return (
        <>
          <section className="error-container"></section>
          <div className="column-container">
            <DarkSkyAPI weatherData={this.props.apiData[0]} />
            <HikingProjectAPI hikingData={this.props.apiData[1]} />
            <MeetupAPI meetupData={this.props.apiData[2]} />
            <TheMovieDbAPI movieData={this.props.apiData[3]} />
            <YelpAPI yelpData={this.props.apiData[4]} />
          </div>
        </>
      );
    default: return <div>Error displaying APIs</div>
  }
}
}
export default AllAPIs;