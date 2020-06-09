import React from "react";
import ReactDOM from "react-dom";

import AddNoteContent from "./AddNoteContent";

describe("AddNoteContent Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddNoteContent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
