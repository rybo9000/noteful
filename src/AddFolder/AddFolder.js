import React from "react";

import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import AddFolderContent from "../AddFolderContent/AddFolderContent";

import "./AddFolder.css";

function AddFolder(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <nav>
          <MainNav />
        </nav>
        <main>
          <AddFolderContent />
        </main>
      </div>
    </>
  );
}

export default AddFolder;
