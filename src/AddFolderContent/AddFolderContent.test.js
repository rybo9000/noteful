import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AddFolderContent from "./AddFolderContent";

describe("AddFolderContent Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <AddFolderContent />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
