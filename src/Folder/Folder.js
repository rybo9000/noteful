import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Folder.proTypes = {
  id: PropTypes.string.isRequired,
  folderClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Folder;
