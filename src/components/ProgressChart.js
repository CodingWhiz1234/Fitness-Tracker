import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ProgressChart = ({ workouts }) => {
  const data = {
    labels: workouts.map((workout, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: 'Calories Burned',
        data: workouts.map((workout) => workout.calories),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default ProgressChart;