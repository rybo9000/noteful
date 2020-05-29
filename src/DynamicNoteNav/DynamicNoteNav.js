import React from "react";
import { withRouter } from "react-router-dom";

import GoBack from "../GoBack/GoBack";
import Folder from "../Folder/Folder";
import "./DynamicNoteNav.css";

function DynamicNoteNav(props) {
  const fullNote = props.notes.filter(
    (note) => props.match.params.noteid === note.id
  );

  const folderId = fullNote[0].folderId;

  const folder = props.folders.filter((folder) => folder.id === folderId);

  const nav = folder.map((folder) => {
    const assignedClass =
      folder.id === props.match.params.folderid ? "FolderSelected" : "Folder";

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
    </ul>
  );
}

DynamicNoteNav.defaultProps = {
  folders: [],
  notes: [],
};

export default withRouter(DynamicNoteNav);
