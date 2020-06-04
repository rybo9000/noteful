import React from "react";
import { withRouter } from "react-router-dom";

import Note from "../Note/Note";

import NotefulContext from "../NotefulContext";
import "./DynamicNoteContent.css";

function DynamicNoteContent(props) {
  return (
    <NotefulContext.Consumer>
      {(value) => {
        const notes = value.notes.map((note) => {
          if (props.match.params.noteid === note.id) {
            return (
              <>
                <Note
                  name={note.name}
                  modified={note.modified}
                  key={note.id}
                  id={note.id}
                  handleDelete={value.handleDelete}
                />
                <span className="noteContent">{note.content}</span>
              </>
            );
          }
        });

        return <>{notes}</>;
      }}
    </NotefulContext.Consumer>
  );
}

DynamicNoteContent.defaultProps = {
  notes: [],
};

export default withRouter(DynamicNoteContent);
