import React, { Component } from 'react';
import Movie from './Movie';

export default class Title extends Component{
  render() {
    const { genreName, moviesData, handleUpdateMyListMovies, myList } = this.props;

    return (
      <div className="title">
        <h1>{genreName}</h1>
        <div className="titles-wrapper">
          {moviesData.map(movie => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                handleUpdateMyListMovies={handleUpdateMyListMovies}
                isInMyList={myList.includes(movie.title)}
              />)
          })}
        </div>
      </div>
    )
  }
}