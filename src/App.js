import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Main from "./Main/Main";
import DynamicFolder from "./DynamicFolder/DynamicFolder";
import DynamicNote from "./DynamicNote/DynamicNote";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";

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

  // ADD A FOLDER
  handleAddFolder = (e) => {
    e.preventDefault();
    // GENERATE RANDOM NUMBER FOR FOLDER ID VALUE
    const randomId = Math.ceil(Math.random() * 9999999999999).toString();

    // BUILD FOLDER OBJECT TO POST TO API SERVER
    const folderObject = {
      id: randomId,
      name: e.target.folderName.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(folderObject),
    };

    // FETCH REQUEST
    fetch(`http://localhost:9090/folders`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        this.props.history.push("/");
        const folders = [...this.state.folders, response];
        this.setState({
          folders,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  };

  // ADD A NOTE
  handleAddNote = (e) => {
    e.preventDefault();

    // GENERATE RANDOM NUMBER FOR FOLDER ID VALUE
    const randomId = Math.ceil(Math.random() * 9999999999999).toString();

    // GENERATE DATE TIME OBJECT AND ASSIGN TO VARIABLE
    const modified = new Date();

    // BUILD OBJECT TO POST
    const noteObject = {
      folderId: e.target.folderSelect.value,
      content: e.target.noteContent.value,
      id: randomId,
      modified: modified,
      name: e.target.noteName.value,
    };

    // OPTION FOR FETCH
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(noteObject),
    };

    fetch("http://localhost:9090/notes", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Went Wrong!");
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        this.props.history.push("/");
        const notes = [...this.state.notes, response];
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
      handleAddFolder: this.handleAddFolder,
      handleAddNote: this.handleAddNote,
    };

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/folder/:folderid" component={DynamicFolder} />
            <Route path="/note/:noteid" component={DynamicNote} />
            <Route path="/addfolder" component={AddFolder} />
            <Route path="/addnote" component={AddNote} />
          </Switch>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default withRouter(App);
