import React, { Component } from 'react';
import styles from '../../dist/styles/style.css';
import axios from 'axios';

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      highlight: {
        title: [undefined],
        detail: [undefined]
      },
      isHelpful1: undefined,
     }
    this.loadHighlights = this.loadHighlights.bind(this);
  }
  componentDidMount() {
    this.loadHighlights();
  }

  async loadHighlights() {
    const data = await axios.get('/api/pageDetails/data');
    const details = data.data[0];
    this.setState({
      highlight: {
        title: details.highlight.title,
        detail: details.highlight.detail
      },
      isHelpful1: details.isHelpful1
    })
  }


  render() { 
    let { highlight } = this.state;    console.log(highlight);
    return ( 
      <div className={styles.mainPage}>
        <div className={styles.highlights}>
          <h5 className={styles.title}>HOME HIGHLIGHTS</h5>
          <div className={styles.highlightTitle}>
            {highlight.title.map((title, index) => 
              <div className={styles.detail} key={index}>{title}{' '}{highlight.detail[0]}</div>
            )}
            {/* <span className={styles.detail}>{highlight.detail[0]}</span> */}
            <div className={styles.isHelpful}>
              <span className={styles.helpful}>Helpful</span>{' '}
              <span className={styles.nothelpful}>Not helpful</span>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Highlights;