import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AddFolder from "../AddFolderContent/AddFolderContent";

describe("AddFolder Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <AddFolder />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
