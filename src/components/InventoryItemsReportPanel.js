import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, Legend, CartesianGrid, Tooltip } from 'recharts';
import { infectedPointsReportFetch, inventoryReportFetch } from '../actions';
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
      <div className="Container-iirp">
        <div>
          <BarChart width={500} height={400} data={data}>
            <CartesianGrid strokeDasharray="2 2"/>
            <Tooltip />
            <Legend dataKey="name" />
            <Bar dataKey="total" fill="#8884d8" />
            <Bar dataKey="healthy" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="InfoBox-iirp">
          <div>
            <text className="Description"> {inventory.description} </text>
          </div>
          <div className="InfoBox-inside-iirp">
            <div>
              <text> Healthy: </text>
              <text style={{fontSize:'150%', color:'#8884d8'}}> {roundedAvgHeatlhy.toFixed(2)} </text>
            </div>
            <div>
              <text> Total: </text>
              <text style={{fontSize:'150%', color:'#82ca9d'}}> {roundedAvgPerson.toFixed(2)} </text>
            </div>
          </div>
        </div>

        <div className="InfoBox-iirp">
          <div>
            <text className="Description"> {infectedPoints.description} </text>
          </div>
          <div>
            <text style={{fontSize:'150%', color:'#d6c065'}}> {infectedPoints.total_points_lost} </text>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reports }) => {
  const { inventory, infectedPoints } = reports;

  return { inventory, infectedPoints };
}

export default connect(mapStateToProps, { infectedPointsReportFetch, inventoryReportFetch })(InventoryItemsReportPanel);
