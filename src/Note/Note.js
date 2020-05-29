import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

function Note(props) {
  const link = `/note/${props.id}`;

  return (
    <Link to={link} className="NoteLink">
      <div className="Note">
        <h3>{props.name}</h3>
        <div className="noteBottom">
          <span>{props.modified}</span>
          <button>Delete Note</button>
        </div>
      </div>
    </Link>
  );
}

export default Note;
