import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function Chart({ data }) {
  const chartData = {
    labels: Array(data.length).fill(''),
    datasets: [
      {
        label: 'Sensor Values',
        data: data,
        borderColor: '#0077cc',
        backgroundColor: 'rgba(0, 119, 204, 0.3)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 700 },
    },
  };

  return (
    <div className="chart">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default Chart;
