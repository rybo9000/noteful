import React from "react";
import { withRouter } from "react-router-dom";

import "./AddButton.css";

function AddButton(props) {
  return (
    <button
      className="AddButton"
      onClick={() => {
        props.history.push(`/${props.place}`);
      }}
    >
      Add {props.thing}
    </button>
  );
}

export default withRouter(AddButton);
