import React, { Component } from 'react';
import * as MovieAPI from '../lib/MovieAPI';
import Title from '../components/Title';
import TableView from '../components/TableView';

export default class MyList extends Component{

  handleUpdateState = () => {
    MovieAPI.getAll()
    .then(moviesDataArray => {
      this.setState({myListMovie: moviesDataArray.filter(movie => movie.my_list)})
    })
  }

  render() {
    const { inMyListMovies, myList, handleUpdateMyListMovies, genres } = this.props;

    return (
      <div className="titleList">
        <TableView
          moviesData={inMyListMovies}
          genres={genres}
          myList={myList}
          handleUpdateMyListMovies={handleUpdateMyListMovies}
        />
        <Title  
          genreName={"My List"}
          moviesData={inMyListMovies}  
          handleUpdateMyListMovies={handleUpdateMyListMovies}
          myList={myList}
        />
      </div>)
  }
}