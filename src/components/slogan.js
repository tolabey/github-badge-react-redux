import React, {Component} from "react";
import "../css/slogan.css";

class Slogan extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <h1 className="slogan">
        {"Get your"} <span /> {"badge now!"}
      </h1>
    );
  }
}

export default Slogan;
