import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"

class Preview extends Component {

    componentWillReceiveProps(){
        console.log(this.props.store.getState(), "preview");
    }

    render(){
        return (
            <div className="preview">
                <h4>Preview</h4>
                <Badge store={this.props.store}></Badge>
            </div>
        )
    }
}

export default Preview;