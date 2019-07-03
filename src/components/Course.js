import React, {Component} from "react";

class Course extends Component {
  render() {
    return (
      <div>
        <h3>Course Component</h3>
        <div className="col-md-4">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Panel Title</h3>
            </div>
            <div className="panel-body">
              Panel Content
              <ul className="list-group">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Course;