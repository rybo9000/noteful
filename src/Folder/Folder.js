import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

function Folder(props) {
  const link = `/folder/${props.id}`;

  return (
    <Link to={link} className="FolderLink">
      <li key={props.id} className={props.folderClass}>
        {props.name}
      </li>
    </Link>
  );
}

Folder.defaultProps = {
  folderClass: "Folder",
};

export default Folder;
