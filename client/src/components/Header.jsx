import React, { Component } from 'react';
import styles from '../../dist/styles/style.css';
import axios from 'axios';

// Icons
import { Icon } from 'react-icons-kit';
import {bath} from 'react-icons-kit/fa/bath';
import {ic_people} from 'react-icons-kit/md/ic_people';
import bed from '../../dist/styles/icons/bed.png';
import rooms from '../../dist/styles/icons/house-door.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewCount: undefined,
      houseType: undefined,
      houseName: undefined,
      icon: undefined,
      location: undefined,
      guests: undefined,
      beds: undefined,
      bedrooms: undefined,
      baths: undefined
     }
     this.loadPage = this.loadPage.bind(this);
  }
  componentDidMount(){
    this.loadPage();
  }
  loadPage() {
    axios
      .get('/api/pageDetails/data')
      .then((data) => {
        let details = data.data[0];
        console.log(details)
        this.setState({
          viewCount: details.viewCount,
          houseType: details.houseType,
          houseName: details.houseName,
          icon: details.icon,
          location: details.location,
          guests: details.guests,
          beds: details.beds,
          bedrooms: details.bedrooms,
          baths: details.baths
        })
      })
      .catch(err => console.log(err))
  }

  render() { 
    return (
      <div className={styles.mainHeader}>
        <div className={styles.left} >
        {/* <div className={styles.viewCount}>
          This home is on people's minds.
          <br/>
          It's been viewed {this.state.viewCount} times in the past week.
        </div> */}
        <div className={styles.header}>
          <h5 className={styles.houseType} >{this.state.houseType}</h5>
          <h1 className={styles.houseName} >{this.state.houseName}</h1>
          <h4 className={styles.location}>{this.state.location}</h4>
        </div>
        <div className={styles.mainDetails}>
          <Icon icon={ic_people}/>
          <span className={styles.guests}>{'  '}{this.state.guests}{'  '}guests{'  '}</span>
          <img src={bed}/>
          <span className={styles.beds}>{'  '}{this.state.beds}{'  '}beds{'  '}</span>
          <img src={rooms}/>
          <span className={styles.bedroom}>{this.state.bedrooms}{'  '}bedrooms{'  '}</span>
          <Icon icon={bath}/>
          <span className={styles.baths}>{'  '}{this.state.baths}{'  '}bath{'  '}</span>
        </div>  
        </div>
          <div className={styles.right}>
            <img className={styles.icon} src={this.state.icon} title={"Blake"}/>
          </div>
      </div>
    );
  }
}
 
export default Header;


