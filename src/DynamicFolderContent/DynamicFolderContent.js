import React from "react";
import { withRouter } from "react-router-dom";

import Note from "../Note/Note";
import AddButton from "../AddButton/AddButton";

import NotefulContext from "../NotefulContext";
import "./DynamicFolderContent.css";

function DynamicFolderContent(props) {
  return (
    <NotefulContext.Consumer>
      {(value) => {
        const notes = value.notes.map((note) => {
          if (props.match.params.folderid === note.folderId) {
            return (
              <Note
                name={note.name}
                modified={note.modified}
                key={note.id}
                id={note.id}
                handleDelete={value.handleDelete}
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
      }}
    </NotefulContext.Consumer>
  );
}

export default withRouter(DynamicFolderContent);
