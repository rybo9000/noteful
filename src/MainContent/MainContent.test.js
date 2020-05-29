import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./MainContent";

describe("MainContent Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MainContent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
