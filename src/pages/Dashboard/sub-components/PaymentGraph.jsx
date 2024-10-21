import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);
const PaymentGraph = () => {
  

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Total Payment Received',
        data: [10000, 12000, 15000, 18000, 20000, 25000, 30000, 27000, 35000, 40000, 42000, 48000],
        backgroundColor: '#D6482b',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 50000,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Formats values with commas (e.g., 10,000)
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly Total Payments Received',
      },
    },
  };

  return <Bar data={data} options={options} className="barChart" />;
};

export default PaymentGraph;
