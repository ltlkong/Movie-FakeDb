import React, { Component } from 'react';
import './TableView.css';
import * as MovieAPI from '../lib/MovieAPI'

export default class TableView extends Component{
  handleToggleMyList = (movie, isInMyList) => {
      (!isInMyList
      ? MovieAPI.addToList(movie)
      : MovieAPI.removeFromList(movie))
  }

  render() {
    const { moviesData, genres, myList, handleUpdateMyListMovies } = this.props;

    return (
      <table className={'myListTable'}>
        <thead>
          <tr>
            <td><h3>Title</h3></td>
            <td><h3>Rating</h3></td>
            <td><h3>Genres</h3></td>
            <td><h3>Remove</h3></td>
          </tr>
        </thead>
        <tbody>
          {moviesData.map(movie => {

            return (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.vote_average+'/10'}</td>
                <td>{genres.map(genre => {
                  if(movie.genre_ids.includes(genre.id)) {
                    return genre.name+' ';
                  };
                  })}
                </td>
                <td>
                  <button onClick={() => {
                    this.handleToggleMyList(movie, myList.includes(movie.title));
                    handleUpdateMyListMovies(movie);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}