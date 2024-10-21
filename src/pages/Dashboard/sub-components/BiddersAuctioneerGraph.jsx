import React from 'react'
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
import { Line } from 'react-chartjs-2';

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

const BiddersAuctioneerGraph = () => {
  const data = {
    labels:[
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label:"Number of Bidders ",
        data:"",
        borderColor:"#D6482b",
        fill:false
      },
      {
        label:"Number of Auctioneers ",
        data:"",
        borderColor:"#fdba88",
        fill:false
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
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
        text: 'Number of Bidders and Auctioneer Registered',
      },
    },
  };
  return <Line data={data} options={options} className="barChart" />;
}

export default BiddersAuctioneerGraph
