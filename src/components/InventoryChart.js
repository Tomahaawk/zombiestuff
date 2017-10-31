import React from 'react';
import { BarChart, Bar, Legend, CartesianGrid, Tooltip } from 'recharts';
import '../css/InventoryItemsReportPanel.css';

const InventoryChart = (props) => {
  const { data, inventory, infectedPoints, roundedAvgHeatlhy, roundedAvgPerson } = props;

  return(
    <div className="Container-iirp">
      <div className="Chart-container-iirp">
        <BarChart width={300} height={300} data={data}>
          <CartesianGrid />
          <Tooltip />
          <Legend dataKey="name" />
          <Bar dataKey="total" fill="#005405" />
          <Bar dataKey="healthy" fill="#013677" />
        </BarChart>
      </div>

      <div className="InfoBox-iirp">
        <text className="Description"> {inventory.description} </text>
        <div className="InfoBox-inside-iirp">
          <div>
            <text className="Description-text-iirp"> Healthy -> {roundedAvgHeatlhy.toFixed(2)} </text>
          </div>
          <div>
            <text className="Description-text-iirp"> Total -> {roundedAvgPerson.toFixed(2)} </text>
          </div>
        </div>
      </div>

      <div className="InfoBox-iirp">
        <text className="Description"> {infectedPoints.description} </text>
        <text className="Description-text-iirp"> {infectedPoints.total_points_lost} </text>
      </div>
    </div>
  );
}

export default InventoryChart;
