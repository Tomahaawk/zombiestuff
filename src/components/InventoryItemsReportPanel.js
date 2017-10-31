import React, { Component } from 'react';
import { connect } from 'react-redux';
import { infectedPointsReportFetch, inventoryReportFetch } from '../actions';
import InventoryChart from './InventoryChart';
import '../css/InventoryItemsReportPanel.css';

class InventoryItemsReportPanel extends Component {

  componentWillMount() {
    this.props.inventoryReportFetch();
    this.props.infectedPointsReportFetch();

  }

  render() {
    const { inventory, infectedPoints } = this.props;
    var roundedAvgHeatlhy = (inventory.average_items_quantity_per_healthy_person * 100)/100;
    var roundedAvgPerson = (inventory.average_items_quantity_per_person * 100)/100;
    const data = [
      {name:'Items per person', total: roundedAvgPerson, healthy: roundedAvgHeatlhy},
    ];

    return(
      <InventoryChart
        data={data}
        inventory={inventory}
        infectedPoints={infectedPoints}
        roundedAvgHeatlhy={roundedAvgHeatlhy}
        roundedAvgPerson={roundedAvgPerson}
      />
    );
  }
}

const mapStateToProps = ({ reports }) => {
  const { inventory, infectedPoints } = reports;

  return { inventory, infectedPoints };
}

export default connect(mapStateToProps, { infectedPointsReportFetch, inventoryReportFetch })(InventoryItemsReportPanel);
