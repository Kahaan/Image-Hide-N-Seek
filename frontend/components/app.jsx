import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Route, HashRouter, Link, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashContainer from "./splash/splash_container";
import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container";
import SessionFormContainer from "./session_form/session_form_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import Footer from "./footer/footer";

// import { fetchPosts, fetchPost } from "../actions/post_actions";

const style = { color: "black", fontFamily: "Futura" };
const App = () => (
  <div>
    <header>
      <Link style={style} to="/home" className="header-link">
        <h1>Home</h1>
      </Link>
      <AuthRoute path="/" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={GreetingContainer} />
      <ProtectedRoute path={`/users/:id`} component={GreetingContainer} />
    </header>
    <main className="main">
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={PostIndexContainer} />
    </main>

    <Route path="/" render={Footer} />
  </div>
);

export default App;
