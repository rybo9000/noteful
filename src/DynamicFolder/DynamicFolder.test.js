import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DynamicFolder from "./DynamicFolder";

describe("DynamicFolder Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <DynamicFolder />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
