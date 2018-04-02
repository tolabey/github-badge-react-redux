import React, { Component } from 'react';
import "../css/searchBar.css"

class SearchBar extends Component {
    
    render(){
        return (
            <div className="search-bar">
                <input className="search-box" type="text" autoComplete="off" id="username" name="username"
                       placeholder="Your GitHub username"/>
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