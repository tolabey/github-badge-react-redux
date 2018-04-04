import React, { Component } from 'react';
import "../css/about.css"

class About extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render(){
        return (
            <div className="about">
                <h1>About</h1>

                <div>GitHub badge is a simple embeddable
                    badge showing your GitHub stats like
                    the number of public repositories, number
                    of followers, favorite languages etc.
                    It runs on Google App Engine with a
                    day-long Memcached backup.
                </div>

                <div>
                    Do you have an idea of a missing feature or have you found a bug? Please report!
                </div>

                <div>
                    Check our changelog if you wonder what we worked on recently.
                </div>

            </div>
        )
    }
}

export default About;