import React, {Component} from "react";
import "../css/footer.css";

class Footer extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="footer">
        {"Brought to you by Berker Peksag (@berkerpeksag) and Burak Yiğit Kaya (@madbyk)"}
      </div>
    );
  }
}

export default Footer;
