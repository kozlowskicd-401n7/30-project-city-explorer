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
      <AllAPIs display={this.state.display} rawData={this.state.rawData}/>
      </>
    )
  }
}

export default CityExplorer;