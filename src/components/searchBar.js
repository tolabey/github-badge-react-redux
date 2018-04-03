import React, { Component } from "react";
import {changeUserName} from "../actions/actions";
import {utils} from "../utils"
import "../css/searchBar.css";

class SearchBar extends Component {

    handleUserName(){
        return (event) => {
            console.log(this.props.store.getState());

            this.props.store.dispatch(changeUserName(event.target.value));
        }
    }

    render(){
        return (
            <div className="search-bar">
                <input className="search-box" type="text" autoComplete="off" id="username" name="username"
                       placeholder="Your GitHub username" onChange={this.handleUserName()}/>
                <div className="search-bottom">
                    <div className="search-bottom-left">
                        <div><input type="checkbox"/>Support GitHub Badge</div>
                        <div><input type="checkbox"/>Disable Google Analytics on badge</div>
                    </div>

                    <div className="search-bottom-mid">
                        <div><input type="checkbox"/>All your JSON-API belong to us!</div>
                    </div>
                    <div className="search-bottom-right">
                        <div className="tweet">
                            tweet
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;