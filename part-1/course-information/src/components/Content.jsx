import React from "react";
import Part from "./Part";

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part partName={part1} exercises={exercises1} />
      <Part partName={part2} exercises={exercises2} />
      <Part partName={part3} exercises={exercises3} />
    </div>
  );
};

export default Content;
