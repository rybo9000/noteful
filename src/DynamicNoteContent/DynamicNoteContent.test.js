import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DynamicNoteContent from "./DynamicNoteContent";

describe("DynamicNoteContent Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <DynamicNoteContent />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
