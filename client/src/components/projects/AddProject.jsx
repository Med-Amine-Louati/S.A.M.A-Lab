import React from "react";

class AddProject extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
        <h1 className="h3 mb-4 text-gray-800">Add new Project</h1>
        <form>
          <div className="form-group">
            <label htmlFor="org-name">Project name:</label>
            <input
              type="text"
              className="form-control"
              id="org-name"
              aria-describedby="organization-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="org-description">Description: </label>
            <textarea
              className="form-control"
              id="org-description"
              rows="3"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={() => {}}>
            Create Project
          </button>
        </form>
      </div>
    );
  }
}
export default AddProject;