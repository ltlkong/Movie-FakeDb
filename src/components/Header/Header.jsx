import React, { Component } from 'react';
import HomeNavigation from './HomeNavigation';
import MyListNavigation from './MyListNavigation'
import SearchBar from './SearchBar';

export default class Header extends Component{
  render() {
    return (
        <header className="header">
          <HomeNavigation/>
          <MyListNavigation/>
          <SearchBar {...this.props}/>
        </header>
    )
  }
}