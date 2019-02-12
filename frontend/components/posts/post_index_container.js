import React from "react";
import { connect } from "react-redux";
import PostIndex from "./post_index";
import {
  fetchPosts,
  fetchPost,
  decodePost,
  createPost
} from "../../actions/post_actions";

const mapStateToProps = state => ({
  posts: state.posts,
  message: state.posts.message,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  decodePost: id => dispatch(decodePost(id)),
  createPost: post => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
