import React from 'react';
import axios from 'axios';
import LineChart from './LineChart.jsx';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getBitCoinPrice = this.getBitCoinPrice.bind(this);
  }

  componentDidMount() {
    this.getBitCoinPrice();
  }

  getBitCoinPrice() {
    axios.get('/bitcoinPrice')
      .then(data => this.setState({ data: data.data }))
      .catch(err => console.log(err.stack));
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <LineChart 
          data={Object.keys(data).map( price => data[price] )}
          labels={Object.keys(data)}
        />
        <a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
      </div>
    )
  }
}
export default Chart;