import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import '../css/InfectedReportPanel.css';

const InfectedChart = (props) => {
    const { data, colors, infected, nonInfected, roundedAvgInfected, roundedAvgNonInfected } = props;

  return(
    <div className="Container-irp">
      <div className="Chart-container-irp">
        <PieChart width={300} height={300}>
          <Tooltip />
          <Legend dataKey="name" />
          <Pie
            isAnimationActive={true}
            data={data}
          >
            {
              data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
            }
          </Pie>
        </PieChart>
      </div>

      <div className="InfoBox-irp">
        <text className="Description"> {infected.description} </text>
        <text className="Description-text-irp"> {roundedAvgInfected.toFixed(2)}% </text>
      </div>

      <div className="InfoBox-irp">
        <text className="Description"> {nonInfected.description} </text>
        <text className="Description-text-irp"> {roundedAvgNonInfected.toFixed(2)}% </text>
      </div>
    </div>
  );
}

export default InfectedChart;
