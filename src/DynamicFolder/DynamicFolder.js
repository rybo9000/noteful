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
          <DynamicFolderNav />
        </nav>
        <main>
          <DynamicFolderContent />
        </main>
      </div>
    </>
  );
}

export default DynamicFolder;
