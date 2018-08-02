import React, { Component } from 'react';
import Header from './Header';
import Highlights from './Highlights';
import HomeDescription from './HomeDescription';
import styles from "../../dist/styles/style.css";

export default class MainPage extends Component {
  constructor() {
    super();


  }
  render() {
    return(
      <div className={styles.container}>
        <Header/>
        <Highlights/>
        <HomeDescription/>

      </div>
    )
  }
}