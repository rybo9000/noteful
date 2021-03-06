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
          <MainNav />
        </nav>
        <main>
          <MainContent />
          <AddButton thing="Note" place="addnote" />
        </main>
      </div>
    </>
  );
}

export default Main;
