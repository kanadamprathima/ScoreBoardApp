import React from "react";
import "./Player.scss";
const Player = (props) => {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      ></div>
      <p>
        {props.name} (score:{props.score}){" "}
        <button onClick={onClickIncrement}>Increment</button>
      </p>
    </li>
  );
};
export default Player;
