import React, { Component } from "react";
import Chart from "react-apexcharts";
import { CCard, CCardBody } from '@coreui/react';

const chartOptions = {
  chart: {
    id: 'basic-bar'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

const chartData = [
  {
    name: 'sales',
    data: [30, 40, 25, 50, 49, 21, 70, 51, 49, 30, 70, 91]
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 20, 45, 35, 50, 50, 75, 45, 81, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <CCard>
          <CCardBody>
            <Chart options={chartOptions} series={chartData} type="bar" height={350} />
          </CCardBody>
        </CCard>
        <div className="mixed-chart">
          <CCard className="formcardbody">
            <CCardBody>

              <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
            </CCardBody>
          </CCard>
        </div>
      </div>
    );
  }
}

export default App;