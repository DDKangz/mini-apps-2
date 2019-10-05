import React from 'react';
import axios from 'axios';
import LineChart from './LineChart.jsx';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitPrice: []
    };
    this.getBitCoinPrice = this.getBitCoinPrice.bind(this);
  }

  componentDidMount() {
    // console.log('im in componentDidMount of Chart');
    this.getBitCoinPrice();
  }

  getBitCoinPrice() {
    axios.get('/bitcoinPrice')
      .then(data => {
        this.setState({ bitPrice: data.data });
      })
      .catch(err => console.log(err.stack));
  }

  render() {
    const bitPrice = this.state.bitPrice;
    // console.log(bitPrice);
    if (this.state.bitPrice.length === 0) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <LineChart 
            data={Object.keys(bitPrice).map( price => bitPrice[price] )}
            labels={Object.keys(bitPrice)}
          />
        </div>
      )
    }
  }
}
export default Chart;