import React from "react";
import { withRouter } from "react-router-dom";

import "./GoBack.css";

function GoBack(props) {
  return (
    <div className="GoBack" onClick={props.history.goBack}>
      {"<-- Go Back"}
    </div>
  );
}

export default withRouter(GoBack);
