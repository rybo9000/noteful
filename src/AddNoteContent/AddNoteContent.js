import React from "react";

import ValidationError from "../ValidationError/ValidationError";

import NotefulContext from "../NotefulContext";
import "./AddNoteContent.css";

class AddNoteContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteName: {
        value: "",
        touched: false,
      },
      folderSelect: {
        value: "",
        touched: false,
      },
    };
  }

  validateName = () => {
    const name = this.state.noteName.value;

    if (name.length === 0) {
      return "Note Name is required!";
    }
  };

  validateFolder = () => {
    const folder = this.state.folderSelect.value;

    if (folder === "") {
      return "You must select a folder!";
    }
  };

  handleChange(name, value) {
    this.setState({
      [name]: {
        value,
        touched: true,
      },
    });
  }

  render() {
    return (
      <NotefulContext.Consumer>
        {(value) => {
          const folderList = value.folders.map((folder) => (
            <option>{folder.name}</option>
          ));

          return (
            <form className="AddNoteForm">
              <label htmlFor="noteName">Note Name</label>
              <input
                type="text"
                id="noteName"
                name="noteName"
                onChange={(e) =>
                  this.handleChange(e.target.name, e.target.value)
                }
              />
              {this.state.noteName.touched === true && (
                <ValidationError message={this.validateName()} />
              )}
              <label htmlFor="folderSelect">Add To Folder</label>
              <select
                id="folderSelect"
                name="folderSelect"
                onChange={(e) =>
                  this.handleChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select A Folder</option>
                {folderList}
              </select>
              {this.state.folderSelect.touched === true && (
                <ValidationError message={this.validateFolder()} />
              )}
              <button
                type="submit"
                disabled={this.validateFolder() || this.validateName()}
              >
                Submit
              </button>
            </form>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default AddNoteContent;
