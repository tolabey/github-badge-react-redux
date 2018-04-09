import React, {Component} from "react";
import "../css/about.css";

class About extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="about">
        <h1>{"About"}</h1>

        <div>{"GitHub badge is a simple embeddable\n" +
            "                    badge showing your GitHub stats like\n" +
            "                    the number of public repositories, number\n" +
            "                    of followers, favorite languages etc.\n" +
            "                    It runs on Google App Engine with a\n" +
            "                    day-long Memcached backup."}
        </div>

        <div>{"Do you have an idea of a missing feature or have you found a bug? Please report!"}</div>

        <div>{"Check our changelog if you wonder what we worked on recently."}</div>

      </div>
    );
  }
}

export default About;
