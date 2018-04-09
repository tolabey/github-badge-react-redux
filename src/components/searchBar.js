import React, {Component} from "react";
import "../css/searchBar.css";
import {utils} from "../utils/utils";
import I from "immutable";

class SearchBar extends Component {

  componentDidMount() {
    utils.handleGithubRequest(this.props.dispatch, "facebook");
  }

  shouldComponentUpdate(nextProps) {
    return !I.is(this.props.timeout, nextProps.timeout);
  }

  handleUserName() {
    return event => {
      utils.debounce(this.props.dispatch, utils.handleGithubRequest, event, this.props.timeout);
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-box" type="text" autoComplete="off" id="username" name="username"
            placeholder="Your GitHub username" onKeyUp={this.handleUserName()}
        />
        <div className="search-bottom">
          <div className="search-bottom-left">
            <div><input type="checkbox"/>{"Support GitHub Badge"}</div>
            <div><input type="checkbox"/>{"Disable Google Analytics on badge"}</div>
          </div>

          <div className="search-bottom-mid">
            <div><input type="checkbox"/>{"All your JSON-API belong to us!"}</div>
          </div>
          <div className="search-bottom-right">
            <div className="tweet">{"tweet"}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
