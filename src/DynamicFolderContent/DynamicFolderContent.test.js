import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import DynamicFolderContent from "./DynamicFolderContent";

describe("DynamicFolderContent Component", () => {
  it.skip("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <DynamicFolderContent />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
