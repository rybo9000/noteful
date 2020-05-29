import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DynamicNoteNav from "./DynamicNoteNav";

describe("DynamicNoteNav Component", () => {
  it.skip("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <DynamicNoteNav />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
