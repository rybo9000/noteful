import React from "react";

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  handleDelete: () => {},
  fetchData: () => {},
  handleAddFolder: () => {},
});

export default NotefulContext;
