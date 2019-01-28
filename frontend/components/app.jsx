import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Route, HashRouter, Link, Switch, Redirect } from "react-router-dom";
import PostIndexContainer from "./posts/post_index_container";

import { fetchPosts, fetchPost } from "../actions/post_actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const img_url =
      Object.keys(this.props.posts).length === 0
        ? ""
        : this.props.posts[1].image_url;
    return (
      <div>
        App component WORKING!!
        <PostIndexContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
