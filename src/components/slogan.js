import React, { Component } from 'react';
import "../css/slogan.css"

class Slogan extends Component {

    shouldComponentUpdate() {
        return false;
    }

    bla(e) {
        console.log("snync-event: ", e.target); // 2 yol
        e.persist(); // veya store a atılır.
        setTimeout(() => {
            console.log("asnync-event: ", e.target); // --> null
        }, 0)
    }

    render(){
        return(
            <h1 className="slogan" onClick={this.bla}>
                Get your <span></span> badge now!
            </h1>
        )
    }
}

export default Slogan;