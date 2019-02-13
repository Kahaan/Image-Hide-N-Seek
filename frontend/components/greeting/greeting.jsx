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
              <p>Explore</p>
            </button>
          </Link>

          <Link to="/">
            <button
              onClick={this.handleSubmit}
              className="header-button logout"
            >
              <p>Log Out</p>
            </button>
          </Link>

          <Link to={`/users/${this.props.currentUser.id}`}>
            <button className="header-button profile">
              <p>My Profile</p>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Greeting);
