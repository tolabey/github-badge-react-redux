import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"
import BadgeError from "./badgeError";

class Preview extends Component {

    render(){
        return (
            <div className="preview">
                <h4>Preview</h4>
                {
                    this.props.main.get("status") === 200 ? (
                        <Badge
                            dispatch={this.props.dispatch}
                            main={this.props.main}
                        />
                    ) : (
                        <BadgeError
                            dispatch={this.props.dispatch}
                            userName={this.props.main.get("login")}
                            status={this.props.main.get("status")}
                        />
                    )
                }
            </div>
        )
    }
}

export default Preview;