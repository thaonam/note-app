import React, {Component} from "react";
import Lesson from "./Lesson";

class Course extends Component {
  render() {
    return (
      
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Panel Title</h3>
          </div>
          <div className="panel-body">
            Panel Content
            <ul className="list-group">
              <Lesson/>
              <Lesson/>
              <Lesson/>
            </ul>
          
          </div>
        </div>
        <button type="button" className="btn bt-success">Register</button>
      </div>
    )
  }
}

export default Course;