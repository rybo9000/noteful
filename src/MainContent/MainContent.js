import React from "react";

import Note from "../Note/Note";

import NotefulContext from "../NotefulContext";
import "./MainContent.css";

function MainContent() {
  return (
    <NotefulContext.Consumer>
      {(value) => {
        const notes = value.notes.map((note) => (
          <Note
            name={note.name}
            modified={note.modified}
            key={note.id}
            id={note.id}
            handleDelete={value.handleDelete}
          />
        ));

        return <>{notes}</>;
      }}
    </NotefulContext.Consumer>
  );
}

export default MainContent;
