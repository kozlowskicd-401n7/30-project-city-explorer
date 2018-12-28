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

  getResource = async (resource) => {
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/${resource}`)
    .query({data: this.props.rawData})
    this.setState({[resource]: data})    
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
            <DarkSkyAPI data={this.state.weather} fetchData={this.getResource}/>
            <HikingProjectAPI data={this.state.trails}/>
            <MeetupAPI data={this.state.meetups}/>
            <TheMovieDbAPI data={this.state.movies}/>
            <YelpAPI data={this.state.yelp}/>
          </div>
        </>
      );
    default: return <div>Error displaying APIs</div>
  }
}
}
export default AllAPIs;