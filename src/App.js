import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./Main/Main";
import DynamicFolder from "./DynamicFolder/DynamicFolder";
import DynamicNote from "./DynamicNote/DynamicNote";

import store from "./dummy-store.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: store.folders,
      notes: store.notes,
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main folders={this.state.folders} notes={this.state.notes} />
            )}
          />
          <Route
            path="/folder/:folderid"
            render={() => {
              return (
                <DynamicFolder
                  folders={this.state.folders}
                  notes={this.state.notes}
                />
              );
            }}
          />
          <Route
            path="/note/:noteid"
            render={() => {
              return (
                <DynamicNote
                  folders={this.state.folders}
                  notes={this.state.notes}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
