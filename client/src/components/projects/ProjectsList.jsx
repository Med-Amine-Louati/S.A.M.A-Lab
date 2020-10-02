import React from "react";
import { Link } from "react-router-dom";
class ProjectsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Projects List:</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Basic Card Example
            </h6>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/projects/1">Project 1</Link>
              </li>
              <li className="list-group-item">
                <Link to="/projects/2">Project 2</Link>
              </li>
              <li className="list-group-item">
                <Link to="/projects/3">Project 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
