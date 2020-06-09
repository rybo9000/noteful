import React from "react";

import ValidationError from "../ValidationError/ValidationError";

import NotefulContext from "../NotefulContext";
import "./AddFolderContent.css";

class AddFolderContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folderName: {
        value: "",
        touched: false,
      },
    };
  }

  validateFolderName() {
    const folderName = this.state.folderName.value.trim();

    if (folderName.length === 0) {
      return "Folder Name is required";
    }
  }

  handleChange = (e) => {
    this.setState({
      folderName: {
        value: e.target.value,
        touched: true,
      },
    });
  };

  render() {
    return (
      <NotefulContext.Consumer>
        {(value) => {
          return (
            <form
              className="AddFolderForm"
              onSubmit={(e) => value.handleAddFolder(e)}
            >
              <label htmlFor="folderName">Folder Name</label>
              <input
                type="text"
                id="folderName"
                name="folderName"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
              {this.state.folderName.touched === true && (
                <ValidationError message={this.validateFolderName()} />
              )}
              <button type="submit" disabled={this.validateFolderName()}>
                Submit
              </button>
            </form>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default AddFolderContent;
