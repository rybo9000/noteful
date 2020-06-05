import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Main from "./Main/Main";
import DynamicFolder from "./DynamicFolder/DynamicFolder";
import DynamicNote from "./DynamicNote/DynamicNote";

import NotefulContext from "./NotefulContext";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [],
      notes: [],
    };
  }

  // FETCH ALL NOTE AND FOLDER DATA FROM THE SERVER
  fetchData = () => {
    // GET FOLDERS
    fetch("http://localhost:9090/folders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((folders) => {
        this.setState({
          folders,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });

    // GET NOTES
    fetch("http://localhost:9090/notes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((notes) => {
        this.setState({
          notes,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  // WHEN THE DELETE BUTTON IS PRESSED ON A NOTE COMPONENT
  handleDelete = (id) => {
    const options = {
      method: "DELETE",
    };

    fetch(`http://localhost:9090/notes/${id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => {
        this.props.history.push("/");

        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({
          notes,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  };

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDelete: this.handleDelete,
      fetchData: this.fetchData,
    };

    return (
      <NotefulContext.Provider value={contextValue}>
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
      </NotefulContext.Provider>
    );
  }
}

export default withRouter(App);
