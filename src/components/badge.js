import React, { Component } from 'react';
import "../css/badge.css"

class Badge extends Component {

    componentWillReceiveProps(){
        console.log(this.props.store.getState(), "badg.js");
    }

    render(){
        return (
            <div className="badge">
                <div className="badge-top">
                    <div className="badge-top-left"></div>
                    <div className="badge-top-right">
                        <a href="" className="user-pic">tolabey</a>
                        <p className="repo-activity">No recent repo activity</p>
                    </div>
                </div>
                <div className="badge-bottom">
                    <div className="badge-bottom-left">
                        <div className="graph"></div>
                        <img className="octocat" src={require("../images/icon-octocat.png")} alt="a"></img>
                    </div>
                    <div className="badge-bottom-right">
                        <div className="languages">Languages</div>
                        <div className="list">
                            <ul>
                                <li>
                                    <strong className="repos">10 </strong>
                                    <span>repos</span>
                                </li>
                                <li>
                                    <strong className="forks">10 </strong>
                                    <span>forks</span>
                                </li>
                            </ul>
                            <hr/>
                            <ul>
                                <li>
                                    <strong className="followers">10 </strong>
                                    <span>followers</span>
                                </li>
                                <li>
                                    <strong className="stargazers"></strong>
                                    <span>stargazers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badge;