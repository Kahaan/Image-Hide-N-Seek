import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Route, HashRouter, Link, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import PostIndexContainer from "./posts/post_index_container";
import SessionFormContainer from "./session_form/session_form_container";

// import { fetchPosts, fetchPost } from "../actions/post_actions";

const App = () => (
  <div>
    <header>
      <Link to="/home" className="header-link">
        <h1>Home</h1>
      </Link>
      <AuthRoute path="/" component={SessionFormContainer} />
    </header>

    <main className="main">
      <ProtectedRoute path="/home" component={PostIndexContainer} />
    </main>
  </div>
);

export default App;
