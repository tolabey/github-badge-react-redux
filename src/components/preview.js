import React, { Component } from 'react';
import Badge from "./badge"
import "../css/preview.css"
import BadgeError from "./badgeError";
import I from "immutable"

class Preview extends Component {

    shouldComponentUpdate(nextProps){
      return !I.is(this.props.data, nextProps.data);
    }

    render(){
      console.log("chenagizhana")
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