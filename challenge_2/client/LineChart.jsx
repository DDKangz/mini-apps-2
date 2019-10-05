import React from 'react';
import ChartJS from 'chart.js';

ChartJS.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
ChartJS.defaults.global.legend.display = true;

class LineChart extends React.Component {  
  buildChart() {
    const myChartCtx = document.getElementById('chart');
    const { data, labels } = this.props;
    // console.log('inside lineChart:', data);

    const myLineChart = new ChartJS(myChartCtx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Bitcoin",
            data: data,
            fill: false,
            borderColor: 'red'
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bitcoin Price',
          fontSize: 20
        },
        tooltips: {
          enabled: true,
          mode: 'nearest',
          intersect: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Day'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Price'
            }
          }]
        }
      }
    });
  }

  componentDidMount() {
    this.buildChart();
  }

  render() {
    return <canvas id='chart' height="80vh" />
  }
}

export default LineChart;