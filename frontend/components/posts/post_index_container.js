import React from "react";
import { connect } from "react-redux";
// import { Provider } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts, fetchPost } from "../../actions/post_actions";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
