import React, { Component } from 'react';
import * as MovieAPI from '../lib/MovieAPI';
import Title from '../components/Title';
import matchString from '../utils/matchString';

export default class TitleList extends Component{
  render() {
    const { genres, handleUpdateMyListMovies, moviesData, myList } = this.props;
    const sortedGenres = genres.sort((a, b) => {
       return a.name.charCodeAt(0)-b.name.charCodeAt(0);
    });

    return (
      <div className="titleList">
        {sortedGenres.map(genre => {
          const sortedMoviesData = moviesData.filter(movie => {
            return movie.genre_ids.includes(genre.id);
          });

          if(sortedMoviesData.length !== 0) {
            return (
              <Title
                key={genre.id}
                genreName={genre.name}
                moviesData={sortedMoviesData}
                handleUpdateMyListMovies={handleUpdateMyListMovies}
                myList={myList}
              />);
          }else {
            return [];
          }
        })}
      </div>
    )
  }
}