import React from "react";

import Folder from "../Folder/Folder";
import AddButton from "../AddButton/AddButton";
import "./MainNav.css";

function MainNav(props) {
  const nav = props.folders.map((folder) => (
    <Folder name={folder.name} key={folder.id} id={folder.id} />
  ));

  return (
    <>
      <ul className="UlNav">{nav}</ul>
      <AddButton thing="Folder" />
    </>
  );
}

MainNav.defaultProps = {
  folders: [],
};

export default MainNav;
