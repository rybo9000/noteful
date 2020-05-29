import React from "react";
import { withRouter } from "react-router-dom";

import Folder from "../Folder/Folder";
import AddButton from "../AddButton/AddButton";
import "./DynamicFolderNav.css";

function DynamicFolderNav(props) {
  const nav = props.folders.map((folder) => {
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
    <>
      <ul className="UlNav">{nav}</ul>
      <AddButton thing={"Folder"} />
    </>
  );
}

DynamicFolderNav.defaultProps = {
  folders: [],
};

export default withRouter(DynamicFolderNav);
