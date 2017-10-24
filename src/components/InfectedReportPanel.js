import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { infectedReportFetch, nonInfectedReportFetch } from '../actions';
import '../css/InfectedReportPanel.css';

class InfectedReportPanel extends Component {

  componentWillMount() {
    this.props.infectedReportFetch();
    this.props.nonInfectedReportFetch();
  }

  render() {
      const { infected, nonInfected } = this.props;
      var roundedAvgInfected = infected.average_infected * 100;
      var roundedAvgNonInfected = nonInfected.average_healthy * 100;
      const data = [{name: 'Infected', value: roundedAvgInfected}, {name: 'Non Infected', value: roundedAvgNonInfected}];
      const colors = ['#f60b0b', '#82ca9d'];
    return(
      <div className="Container-irp">
      <div>
        <PieChart width={400} height={400}>
          <Tooltip />
          <Legend dataKey="name" />
          <Pie
            isAnimationActive={true}
            data={data}
            fill="#f60b0b"
          >
            {
              data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
            }
          </Pie>
        </PieChart>
      </div>

        <div className="InfoBox-irp">
          <div>
            <text className="Description"> {infected.description} </text>
          </div>
          <div>
            <text className="Stats-infected"> {roundedAvgInfected.toFixed(2)}%</text>
          </div>
        </div>

        <div className="InfoBox-irp">
          <div>
            <text className="Description"> {nonInfected.description} </text>
          </div>
          <div>
            <text className="Stats-non-infected"> {roundedAvgNonInfected.toFixed(2)}%</text>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ reports }) => {
    const { infected, nonInfected } = reports;
    //console.log(infected);
    return  { infected, nonInfected };
  }

export default connect(mapStateToProps, { infectedReportFetch, nonInfectedReportFetch } )(InfectedReportPanel);
