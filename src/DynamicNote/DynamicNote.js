import React from "react";

import Header from "../Header/Header";
import DynamicNoteNav from "../DynamicNoteNav/DynamicNoteNav";
import DynamicNoteContent from "../DynamicNoteContent/DynamicNoteContent";
import "./DynamicNote.css";

function DynamicNote(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <nav>
          <DynamicNoteNav />
        </nav>
        <main>
          <DynamicNoteContent />
        </main>
      </div>
    </>
  );
}

export default DynamicNote;
