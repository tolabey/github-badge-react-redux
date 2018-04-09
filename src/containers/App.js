import React, {Component} from "react";
import {createStore} from "redux";
import {reducer} from "../reducers/index";
import ForkMe from "../components/forkMe";
import Slogan from "../components/slogan";
import SearchBar from "../components/searchBar";
import About from "../components/about";
import Footer from "../components/footer";
import Preview from "../components/preview";
import I from "immutable";
import "../css/app.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(reducer);
    this.state = {main: I.Map()};
  }


  componentDidMount() {
    this.store.subscribe(() => {
      this.setState({ // eslint-disable-line react/no-set-state
        main: this.store.getState()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <ForkMe/>
        <div className="bodybuilder">
          <div className="container">
            <div className="center">
              <div className="left">
                <Slogan/>
                <Preview data={this.state.main.get("badgeData", I.Map())}/>
              </div>
              <div className="center-cat" />
            </div>
            <SearchBar dispatch={this.store.dispatch} timeout={this.state.main.get("timeout")} />
            <About/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
