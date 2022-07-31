import React, { useState } from "react";
const AddPlayerForm = (props) => {
  const [name, set_name] = useState(" ");
  return (
    <div className="AddPlayerForm">
      <p>
        new Player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            set_name(e.target.value);
          }}
        ></input>{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
            set_name(" ");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};
export default AddPlayerForm;
