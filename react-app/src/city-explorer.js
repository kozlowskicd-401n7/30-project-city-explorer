import React from 'react';
import Header from './components/header/header.js';
import SearchForm from './components/search-form/search-form.js';
import CityMap from './components/city-map/city-map.js';
import AllAPIs from './components/api/api.js';
import superagent from 'superagent';
import './original.css';

class CityExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'hide',
      apiData: ['','','','',''],
    };
  }

  citySearch = (content) => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/location`)
    .query({data: content})
    .then(results => {
      this.setState({
        display: 'show',
        searchContent: content,
        rawData: results.body,
      });
      let requests = ['weather', 'trails', 'meetups', 'movies', 'yelp'];
      let allPromises = [];
      requests.forEach((request) => {
        console.log(`https://city-explorer-backend.herokuapp.com/${request}`);
        let promise = superagent.get(`https://city-explorer-backend.herokuapp.com/${request}`).query({data: this.state.rawData});
        allPromises.push(promise);
        });
      Promise.all(allPromises)
      .then(results => {
        let outcome = [];
        results.forEach((res) => {
          outcome.push(res.body);
        })
        this.setState({apiData: outcome});
        console.log(this.state);
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
      <Header />
      <SearchForm searchHandler={this.citySearch}/>
      <CityMap display={this.state.display} searchContent={this.state.searchContent} rawData={this.state.rawData}/>
      <AllAPIs display={this.state.display} apiData={this.state.apiData}/>
      </>
    )
  }
}

export default CityExplorer;