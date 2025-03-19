import React from 'react';
import ProgressChart from './ProgressChart';

const ProgressDashboard = ({ workouts }) => {
  const totalCalories = workouts.reduce((total, workout) => total + parseInt(workout.calories), 0);

  return (
    <div>
      <h2>Progress Dashboard</h2>
      <h3>Total Calories Burned: {totalCalories}</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.duration} min - {workout.calories} calories
          </li>
        ))}
      </ul>
      <ProgressChart workouts={workouts} />
    </div>
  );
};

export default ProgressDashboard;