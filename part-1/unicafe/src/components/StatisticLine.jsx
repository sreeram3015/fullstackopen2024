import React from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}: {value}
        {text === "Positive" ? "%" : " "}
      </p>
    </div>
  );
};

export default StatisticLine;
