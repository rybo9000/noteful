import React from "react";
import { withRouter } from "react-router-dom";

import Note from "../Note/Note";
import "./DynamicNoteContent.css";

function DynamicNoteContent(props) {
  const notes = props.notes.map((note) => {
    if (props.match.params.noteid === note.id) {
      return (
        <>
          <Note
            name={note.name}
            modified={note.modified}
            key={note.id}
            id={note.id}
          />
          <span className="noteContent">{note.content}</span>
        </>
      );
    }
  });
  return <>{notes}</>;
}

DynamicNoteContent.defaultProps = {
  notes: [],
};

export default withRouter(DynamicNoteContent);
