import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"

class Preview extends Component {

    render(){
        return (
            <div className="preview">
                <h4>Preview</h4>
                <Badge></Badge>
            </div>
        )
    }
}

export default Preview;