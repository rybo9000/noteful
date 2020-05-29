import React from "react";

import "./AddButton.css";

function AddButton(props) {
  return <button className="AddButton">Add {props.thing}</button>;
}

export default AddButton;
