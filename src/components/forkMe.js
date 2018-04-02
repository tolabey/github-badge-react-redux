import React, { Component } from 'react';
import iconforkme from "../images/icon-fork-me.png";
import "../css/forkme.css"

class ForkMe extends Component {

    render(){
        return (
            <div className="forkMe">
                <img src={iconforkme} alt="33" height="80" width="80"/>
            </div>
        )
    }
}

export default ForkMe;