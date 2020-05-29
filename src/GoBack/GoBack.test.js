import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import GoBack from "./GoBack";

describe("GoBack Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <GoBack />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
