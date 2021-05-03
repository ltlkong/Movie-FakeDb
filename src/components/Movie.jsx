import React, { Component } from 'react';
import * as MovieAPI from '../lib/MovieAPI.js';

export default class Movie extends Component{
  handleToggleMyList = (movie,isInMyList) => {
    !isInMyList
    ? MovieAPI.addToList(movie)
    : MovieAPI.removeFromList(movie)
  }

  render() {
    const { movie, handleUpdateMyListMovies, isInMyList } = this.props;

    return (
      <div className="movie">
        <img src={movie.poster_path} alt="Movie Poster"/>
        <div className="overlay">
          <div className="title">{movie.title}</div>
          <div className="rating">{`${movie.vote_average}/10`}</div>
          <div className="plot">
            {movie.overview}
          </div>
          <div
            data-toggled={isInMyList} 
            className="listToggle"
            onClick={() => {
              this.handleToggleMyList(movie,isInMyList);
              handleUpdateMyListMovies(movie);
            }
          }>
            <div>
              <i className="fa fa-fw fa-plus"></i>
              <i className="fa fa-fw fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}