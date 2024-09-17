import React from "react";
import { Radar } from "react-chartjs-2";
import { RadialLinearScale } from 'chart.js/auto' //NEEDED in order to scale the x-axis xorrectly for radar chart!


function RadarChart({ chartData, idx }) {
  return (
    <div className="chart-container" id={"chart-container"+idx}>
      <Radar
        key={"radar-chart-"+idx}
        id={"radar-chart-"+idx}
        data = { chartData }
        options = {{
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }}
      />
    </div>
  );
}
export default RadarChart;