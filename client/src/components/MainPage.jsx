import React, { Component } from 'react';
import Header from './Header';
import Highlights from './Highlights';
import HomeDescription from './HomeDescription';

export default class MainPage extends Component {
  constructor() {
    super();


  }
  render() {
    return(
      <div>
        <Header/>
        <Highlights/>
        <HomeDescription/>

      </div>
    )
  }
}