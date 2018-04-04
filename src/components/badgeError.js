import React, { Component } from 'react';
import "../css/badgeError.css"

class BadgeError extends Component {

    render(){
        return (
            <div className="badge-error">
                <div>{this.props.store.getState().userName} is not found.</div>
                <h1>{this.props.store.getState().status}</h1>

            </div>
        )
    }
}

export default BadgeError;