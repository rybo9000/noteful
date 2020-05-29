import React from "react";

import Note from "../Note/Note";
import "./MainContent.css";

function MainContent(props) {
  const notes = props.notes.map((note) => (
    <Note
      name={note.name}
      modified={note.modified}
      key={note.id}
      id={note.id}
    />
  ));

  return <>{notes}</>;
}

MainContent.defaultProps = {
  notes: [],
};

export default MainContent;
