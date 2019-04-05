import React from "react";
import { Link, withRouter } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <nav>
        <div>
          <Link to="/home">
            <button className="header-button explore">
              <h1>Explore</h1>
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={this.handleSubmit}
              className="header-button logout"
            >
              <h1>Log Out</h1>
            </button>
          </Link>
          {/*
          <Link to={`/users/${this.props.currentUser.id}`}>
            <button className="header-button profile">
              <h1>My Profile</h1>
            </button>
          </Link>
          */}
        </div>
      </nav>
    );
  }
}

export default withRouter(Greeting);
