import React, { Component } from 'react';

export default class SearchBar extends Component{
  state = {
    input: ''
  }

  handleUpdateSearchInput = (input) => {
    this.setState({input})
  }

  render() {
    const { input } = this.state;
    const { handleUpdateMovies,numberOfMovies } = this.props;
    const ruleString = input !== '' 
    ? `Found ${numberOfMovies} movies with the query "${input}"` 
    : '';
    
    return (
      <form id="search" className="search">
        <input
          type="search"
          placeholder="Search for a title..."
          value={input}
          onChange={(event) => {
            const value =event.target.value;

            this.handleUpdateSearchInput(value);
            handleUpdateMovies(value);
          }}
        />
        <div className="searchResults">{ruleString}</div>
      </form>
    )
  }
}