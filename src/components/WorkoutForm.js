import React, { useState } from 'react';

const WorkoutForm = ({ onAddWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && duration && calories) {
      const workout = { exercise, duration, calories };
      onAddWorkout(workout);
      setExercise('');
      setDuration('');
      setCalories('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;