import React from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  average,
  total,
  percentagePositive,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {percentagePositive}</p>
    </div>
  );
};

export default Statistics;
