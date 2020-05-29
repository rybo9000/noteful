import React from "react";

import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import MainContent from "../MainContent/MainContent";
import AddButton from "../AddButton/AddButton";
import "./Main.css";

function Main(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <nav>
          <MainNav folders={props.folders} />
        </nav>
        <main>
          <MainContent notes={props.notes} />
          <AddButton thing="Note" />
        </main>
      </div>
    </>
  );
}

export default Main;
