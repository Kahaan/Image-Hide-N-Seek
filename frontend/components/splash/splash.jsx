import React from "react";
import Typed from "typed.js";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = { username: "guest", password: "password" };
    this.props.login(user);
  }

  demoButton() {
    if (this.props.currentUser) {
      const name = this.props.currentUser.username;
      return <h4>Welcome, {name}.</h4>;
    } else {
      return (
        <button className="session-button" onClick={this.guestLogin}>
          Demo
        </button>
      );
    }
  }

  componentDidMount() {
    var options = {
      strings: [
        "<h1>The background image you're looking at has 15,000 words encryted into it.</h1><h1>Don't believe me?</h1><h1>Try encoding your own pictures!</h1>"
        // "<h1>Try encoding your own pictures!</h1>"
      ],
      typeSpeed: 30
    };

    var typed = new Typed(".element", options);
  }

  render() {
    return (
      <div className="container">
        <section className="parallax">
          <section className="splash-text">{this.demoButton()}</section>
        </section>
        <div className="element" />
      </div>
    );
  }
}

export default Splash;
