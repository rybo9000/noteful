import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DynamicNote from "./DynamicNote";

describe("DynamicNote Component", () => {
  it.skip("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <DynamicNote />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode;
  });
});
