import React from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>
            {value}
            {text === "Positive" ? "%" : ""}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticLine;
