import React from "react";
import { withRouter } from "react-router-dom";

import GoBack from "../GoBack/GoBack";
import Folder from "../Folder/Folder";

import NotefulContext from "../NotefulContext";
import "./DynamicNoteNav.css";

function DynamicNoteNav(props) {
  return (
    <NotefulContext.Consumer>
      {(value) => {
        const fullNote = value.notes.filter(
          (note) => props.match.params.noteid === note.id
        );

        if (!fullNote[0]) {
          value.fetchData();
        }

        const folderId = fullNote[0].folderId || "2";

        const folder = value.folders.filter((folder) => folder.id === folderId);

        const nav = folder.map((folder) => {
          const assignedClass =
            folder.id === props.match.params.folderid
              ? "FolderSelected"
              : "Folder";

          return (
            <Folder
              name={folder.name}
              key={folder.id}
              id={folder.id}
              folderClass={assignedClass}
            />
          );
        });

        return (
          <ul className="UlNav">
            {nav}
            <GoBack />
            Test Test
          </ul>
        );
      }}
    </NotefulContext.Consumer>
  );
}

export default withRouter(DynamicNoteNav);
