import React from "react";
import StatisticLine from "./StatisticLine";

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
      {total > 0 ? (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine
            text="Positive"
            value={percentagePositive.toFixed(2)}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
