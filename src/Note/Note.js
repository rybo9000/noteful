import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Note.css";

function Note(props) {
  const link = `/note/${props.id}`;

  return (
    <div className="Note">
      <Link to={link} className="NoteLink">
        <h3>{props.name}</h3>
      </Link>
      <div className="noteBottom">
        <span>{props.modified}</span>
        <button onClick={(e) => props.handleDelete(props.id)}>
          Delete Note
        </button>
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Note;
