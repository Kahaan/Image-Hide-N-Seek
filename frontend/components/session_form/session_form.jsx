import React from "react";
import Modal from "react-modal";
import { Link, withRouter } from "react-router-dom";
import style from "./modal_style";

import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      modalOpen: false,
      login: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.guestSignup = this.guestSignup.bind(this);
    this.switchForms = this.switchForms.bind(this);
  }

  render() {
    return <div />;
  }
}

export default withRouter(SessionForm);
