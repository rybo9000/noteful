import React from "react";
import ReactDOM from "react-dom";
import MainNav from "./MainNav";

describe("Nav Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MainNav />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
