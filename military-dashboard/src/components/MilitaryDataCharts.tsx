import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

// Define the structure of the data
interface MilitaryData {
  dates: string[];
  forces: number[];
  tanks: number[];
  supplies: number[];
}

const MilitaryDataCharts: React.FC = () => {
  const [data, setData] = useState<MilitaryData>({
    dates: [],
    forces: [],
    tanks: [],
    supplies: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('/data/military').then(response => {
        setData(response.data);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const lineChartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Forces',
        data: data.forces,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Tanks',
        data: data.tanks,
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
    ],
  };

  const barChartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Supplies',
        data: data.supplies,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Military Operations Overview</h2>
      <Line data={lineChartData} />
      <Bar data={barChartData} />
    </div>
  );
};

export default MilitaryDataCharts;