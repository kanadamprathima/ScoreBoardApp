import React, { useState } from "react";
import "./Scoreboard.scss";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}
function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}
const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: "violeta", score: 11 },
    { id: 2, name: "Eszter", score: 50 },
    { id: 3, name: "Jeroen v2", score: 400 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );
  // const players_sorted = [...players].sort(compare_name);
  const change_sorting = (e) => {
    console.log("new sort order:", e.target.value);
    set_sort_by(e.target.value);
  };
  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    //console.log(new_players_array);
    set_players(new_players_array);
  };
  const randomizeScores = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 101),
    }));
    set_players(new_players_array);
  };
  const resetScores = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: 0,
    }));
    set_players(new_players_array);
  };
  const addPlayer = (name) => {
    console.log("Lets add a new player with name:", name);
    set_players([
      ...players,
      {
        id: Math.random(),
        name,
        score: 0,
      },
    ]);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort Order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">sort by name</option>
        </select>
      </p>
      <button onClick={resetScores}>Reset</button>
      <button onClick={randomizeScores}>Randomize</button>

      <p>PLAYERS's scores:</p>
      <ul>
        {players_sorted.map((p) => (
          <Player
            key={p.id}
            id={p.id}
            name={p.name}
            score={p.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};
export default Scoreboard;
