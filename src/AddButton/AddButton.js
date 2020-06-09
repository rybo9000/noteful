import React from "react";
import PropTypes from "prop-types";
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

// DEFINE PROPTYPES
AddButton.propTypes = {
  place: PropTypes.string.isRequired,
};

export default withRouter(AddButton);
