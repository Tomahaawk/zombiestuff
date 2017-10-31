import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfectedChart from './InfectedChart';
import { infectedReportFetch, nonInfectedReportFetch } from '../actions';

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
      const colors = ['#600000', '#013677'];
    return(
      <InfectedChart
        data={data}
        colors={colors}
        infected={infected}
        nonInfected={nonInfected}
        roundedAvgInfected={roundedAvgInfected}
        roundedAvgNonInfected={roundedAvgNonInfected}
      />
    );
  }
}


const mapStateToProps = ({ reports }) => {
    const { infected, nonInfected } = reports;
    //console.log(infected);
    return  { infected, nonInfected };
  }

export default connect(mapStateToProps, { infectedReportFetch, nonInfectedReportFetch } )(InfectedReportPanel);
