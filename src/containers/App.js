import React, { Component } from 'react';
import '../App.css';
import ForkMe from "../components/forkMe"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForkMe></ForkMe>
      </div>
    );
  }
}

export default App;
