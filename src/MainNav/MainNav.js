import React from "react";

import Folder from "../Folder/Folder";
import AddButton from "../AddButton/AddButton";

import NotefulContext from "../NotefulContext";
import "./MainNav.css";

function MainNav() {
  return (
    <NotefulContext.Consumer>
      {(value) => {
        const nav = value.folders.map((folder) => (
          <Folder name={folder.name} key={folder.id} id={folder.id} />
        ));

        return (
          <>
            <ul className="UlNav">{nav}</ul>
            <AddButton thing="Folder" />
          </>
        );
      }}
    </NotefulContext.Consumer>
  );
}

export default MainNav;
