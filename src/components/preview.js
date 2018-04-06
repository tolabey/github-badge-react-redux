import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"
import BadgeError from "./badgeError";

class Preview extends Component {

    render(){
        const {data} = this.props;

        return (
            <div className="preview">
                {
                    data.size !== 0 &&
                    (
                        <div>
                            <h4>Preview</h4>
                            {
                                data.get("status") === 200 ? (
                                    <Badge data={data}/>
                                ) : (
                                    <BadgeError userName={data.get("login", "")} status={data.get("status")}/>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Preview;