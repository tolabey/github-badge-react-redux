import React, { Component } from 'react';
import ForkMe from "../components/forkMe"
import Slogan from "../components/slogan"
import SearchBar from "../components/searchBar"
import About from "../components/about"
import Footer from "../components/footer"
import Preview from "../components/preview"
import "../css/app.css"

class App extends Component {

  render() {
    return (
      <div className="App">

          <ForkMe/>

          <div className="container">

              <Slogan/>

              <SearchBar store={this.props.store}/>

              <Preview store={this.props.store}/>

              <About/>

              <Footer/>

          </div>
      </div>
    );
  }
}

export default App;
