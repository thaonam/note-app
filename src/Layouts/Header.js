import React, {Component} from "react";
import IconDelete from "./../Icons/IconDelete";
import IconColumn from "./../Icons/IconColumn";
import IconGrid from "./../Icons/IconGrid";


class Header extends Component {
  render() {
    return (
        <div className="note-header navbar-header">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-3">
                <div>
                  <IconDelete className="icons icons--delete icons-w30"/>
                  <IconColumn className="icons icons--column icons-w30"/>
                  <IconGrid className="icons icons--column icons-w30"/>
                </div>
              </div>
              <div className="col-md-7"></div>
            </div>
          </div>
        </div>
    )
  }
}

export default Header
