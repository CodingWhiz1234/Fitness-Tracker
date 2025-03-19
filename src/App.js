import React, { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import ProgressDashboard from './components/ProgressDashboard';

function App() {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from localStorage when the app loads
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(savedWorkouts);
  }, []);

  // Add a new workout and save to localStorage
  const addWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  return (
    <div>
      <h1>Workout Log</h1>
      <WorkoutForm onAddWorkout={addWorkout} />
      <ProgressDashboard workouts={workouts} />
    </div>
  );
}

export default App;