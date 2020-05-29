import React from "react";
import { withRouter } from "react-router-dom";

import Note from "../Note/Note";
import AddButton from "../AddButton/AddButton";
import "./DynamicFolderContent.css";

function DynamicFolderContent(props) {
  const notes = props.notes.map((note) => {
    if (props.match.params.folderid === note.folderId) {
      return (
        <Note
          name={note.name}
          modified={note.modified}
          key={note.id}
          id={note.id}
        />
      );
    }
  });
  return (
    <>
      {notes}
      <AddButton thing="Note" />
    </>
  );
}

DynamicFolderContent.defaultProps = {
  notes: [],
};

export default withRouter(DynamicFolderContent);
