import React, { Component } from 'react';
import styles from '../../dist/styles/style.css';

class HomeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={styles.mainPage}>
        <div className={styles.body}>
          <p>A unique experience for the person who loves nature and vintage American icons. A little rustic, but vastly rewarding. Please read the entire listing and view an extensive photo library to determine if this satisfies your creature comfort quotient!
  Check out our Airbnb China lifestyle interview on YT video network:
  /watch?Pfnle8DXleU</p>
          <h4 className={styles.space}>The space</h4>
          <p>Featured here is a 1971 AIRSTREAM 28' 'SOVEREIGN OF THE ROAD' trailer.
  This INTERNATIONAL model was the Cadillac of trailers in it's day.
  Straight out of the 'MadMen' era, this silver slipper boasts sleeping for up to FOUR (4) PERSONS on ONE (1) DOUBLE and TWO (2) SINGLE BEDS..
  All quality linens and towels are provided.
  The rear BATHROOM is equipped with a toilet, sink, and a small combination tub/ shower.
  The galley has a gas range-top, oven, refrigerator and double sink(URL HIDDEN)gas FURNACE provides comfort heating on chilly nights.</p>
          <h4 className={styles.guestaccess}>Guest access</h4>
          <p>Swimming pool is available for guest use during summer months. Hiking trails on and off the property.</p>
        </div>
      </div>
     );
  }
}
  
export default HomeDescription;