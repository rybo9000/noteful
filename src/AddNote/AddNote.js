import React from "react";

import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import AddNoteContent from "../AddNoteContent/AddNoteContent";

import "./AddNote.css";

function AddNote(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <nav>
          <MainNav />
        </nav>
        <main>
          <AddNoteContent />
        </main>
      </div>
    </>
  );
}

export default AddNote;
