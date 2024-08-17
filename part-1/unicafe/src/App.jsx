import { useState } from "react";
import { Statistics, Button } from "./components";

const App = () => {
  // State hooks for feedback counts
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handlers to update state
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const percentagePositive = (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text={"Good"} onClick={handleGoodClick} />
      <Button text={"Bad"} onClick={handleBadClick} />
      <Button text={"Neutral"} onClick={handleNeutralClick} />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        percentagePositive={percentagePositive}
      />
    </div>
  );
};

export default App;
