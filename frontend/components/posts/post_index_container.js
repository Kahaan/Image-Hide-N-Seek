import React from "react";
import { connect } from "react-redux";
import PostIndex from "./post_index";
import {
  fetchPosts,
  fetchPost,
  decodePost,
  encodePost,
  createPost,
  clearMessage
} from "../../actions/post_actions";

const mapStateToProps = state => ({
  posts: state.posts,
  message: state.posts.message,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  decodePost: id => dispatch(decodePost(id)),
  encodePost: (secret, id) => dispatch(encodePost(secret, id)),
  createPost: post => dispatch(createPost(post)),
  clearMessage: () => dispatch(clearMessage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
