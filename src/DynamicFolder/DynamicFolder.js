import React from "react";

import Header from "../Header/Header";
import DynamicFolderNav from "../DynamicFolderNav/DynamicFolderNav";
import DynamicFolderContent from "../DynamicFolderContent/DynamicFolderContent";
import "./DynamicFolder.css";

function DynamicFolder(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <nav>
          <DynamicFolderNav folders={props.folders} />
        </nav>
        <main>
          <DynamicFolderContent notes={props.notes} />
        </main>
      </div>
    </>
  );
}

export default DynamicFolder;
