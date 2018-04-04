import React, { Component } from 'react';
import "../css/badge.css";
import { Sparklines, SparklinesBars } from 'react-sparklines';


class Badge extends Component {

    render(){
        return (
            <div className="badge">
                <div className="badge-top">
                    <div className="badge-top-left">
                        <img src={this.props.store.getState().pp} id="avatar_url" className="pp" alt=""/>
                    </div>
                    <div className="badge-top-right">
                        <a href={this.props.store.getState().userUrl} className="login">{this.props.store.getState().userName}</a>
                        <p className="repo-activity">{this.props.store.getState().repoActivity}</p>
                    </div>
                </div>
                <div className="badge-bottom">
                    <div className="badge-bottom-left">
                        <div className="graph">
                            <Sparklines data={this.props.store.getState().graphData} style={{height: "40px", width: "40px"}}>
                                <SparklinesBars style={{fill:"green"}} />
                            </Sparklines>
                        </div>
                        <img className="octocat" src={require("../images/icon-octocat.png")} alt="a"></img>
                    </div>
                    <div className="badge-bottom-right">
                        <div className="languages">{this.props.store.getState().languages}</div>
                        <div className="list">
                            <ul>
                                <li>
                                    <strong className="repos">{this.props.store.getState().repos}</strong>
                                    <span> repos</span>
                                </li>
                                <li>
                                    <strong className="forks">{this.props.store.getState().forks} </strong>
                                    <span> forks</span>
                                </li>
                            </ul>
                            <hr/>
                            <ul>
                                <li>
                                    <strong className="followers">{this.props.store.getState().followers} </strong>
                                    <span> followers</span>
                                </li>
                                <li>
                                    <strong className="stargazers">{this.props.store.getState().stargazers}</strong>
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