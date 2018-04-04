import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"
import BadgeError from "./badgeError";

class Preview extends Component {

    render(){
        const status = this.props.store.getState().status;
        let badge;
        if(status === 200) {
                badge = <Badge store={this.props.store}/>;
        }
        else{
            badge = <BadgeError store={this.props.store}/>
        }
        return (
            <div className="preview">
                <h4>Preview</h4>
                {badge}
            </div>
        )
    }
}

export default Preview;