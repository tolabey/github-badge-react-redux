import React, { Component } from 'react';
import "../css/badge.css";
import { Sparklines, SparklinesBars } from 'react-sparklines';


class Badge extends Component {
    render(){
        const {data} = this.props;

        return (
            <div className="badge">
                <div className="badge-top">
                    <div className="badge-top-left">
                        <img src={data.get("avatar_url")} id="avatar_url" className="pp" alt=""/>
                    </div>
                    <div className="badge-top-right">
                        <a className="login" href={data.get("html_url")}>{data.get("login")}</a>
                        <p className="repo-activity">{data.get("repo-activity")}</p>
                    </div>
                </div>
                <div className="badge-bottom">
                    <div className="badge-bottom-left">
                        <div className="graph">
                            <Sparklines data={data.get("graphData").toJS()} style={{height: "40px", width: "40px"}}>
                                <SparklinesBars style={{fill:"green"}} />
                            </Sparklines>
                        </div>
                        <img className="octocat" src={require("../images/icon-octocat.png")} alt="a"></img>
                    </div>
                    <div className="badge-bottom-right">
                        <div className="languages">{data.get("languages")}</div>
                        <div className="list">
                            <ul>
                                <li>
                                    <strong className="repos">{data.get("repos")}</strong>
                                    <span> repos</span>
                                </li>
                                <li>
                                    <strong className="forks">{data.get("forks")} </strong>
                                    <span> forks</span>
                                </li>
                            </ul>
                            <hr/>
                            <ul>
                                <li>
                                    <strong className="followers">{data.get("followers")} </strong>
                                    <span> followers</span>
                                </li>
                                <li>
                                    <strong className="stargazers">{data.get("stargazers")}</strong>
                                    <span> stargazers</span>
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