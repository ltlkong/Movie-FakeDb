import React, { Component } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import TitleList from './pages/TitleList';
import matchString from './utils/matchString.js';
import MyList from './pages/MyList';

class App extends Component {
  state = {
    genres: [],
    moviesData: [],
    myList: [],
  }

  componentDidMount = () => {
    MovieAPI.genres()
    .then(genres => {
      this.setState({genres});
    });

    MovieAPI.getAll()
    .then(moviesData => {
      this.setState({moviesData})
      return moviesData
    })
    .then(moviesData => {
      let myList = [];

      moviesData.forEach(movie => {
        if(movie.my_list) myList.push(movie.title);
      });
      this.setState({myList})
    });
  }

  handleUpdateSearchedMovieData = (input) => {
    MovieAPI.getAll()
    .then(moviesDataArray => {
      this.setState(() => {
        return {
          moviesData: moviesDataArray.filter(movie => matchString(movie.title, movie.overview, input))
        }
      })
    })
  }

  handleUpdateMyListMovies = (movie) => {
    this.setState(prevState  => {
      if(prevState.myList.includes(movie.title) === false) {
        return {myList: prevState.myList.concat(movie.title)}
      }else {
        return {myList: prevState.myList.filter(currentTitle=> movie.title !== currentTitle)}
      }
    });
  }

  render = () => {
    const { moviesData, myList } = this.state;
    const inMyListMovies = moviesData.filter(movie => {
      return myList.includes(movie.title)
    })

    return (
      <BrowserRouter>
        <Header
          handleUpdateMovies={this.handleUpdateSearchedMovieData}
          numberOfMovies={moviesData.length}
        />
        <Switch>
          <Route path='/myList' component={() => <MyList {...this.state} inMyListMovies={inMyListMovies} handleUpdateMyListMovies={this.handleUpdateMyListMovies}/>}/>
          <Route path='/' component={() => <TitleList {...this.state} handleUpdateMyListMovies={this.handleUpdateMyListMovies}/>} />
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
