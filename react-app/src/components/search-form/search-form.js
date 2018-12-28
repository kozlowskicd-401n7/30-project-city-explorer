import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formChange = (e) => {
    e.preventDefault();
    this.setState({field: e.target.value});
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.field);
  }

  render() {
  return (
    <form>
      <label>Search for a location</label>
      <input type="text" onChange={this.formChange} id="input-search" placeholder="Enter a location here" />
      <button onClick={this.submitForm}>Explore!</button>
    </form>
  )
  }
}

export default SearchForm;