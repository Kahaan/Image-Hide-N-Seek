import React from "react";
import { connect } from "react-redux";
import CommentList from "./comment_list";
import {
  fetchComments,
  createComment,
  deleteComment,
  clearComments
} from "../../actions/comment_actions";

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  deleteComment: id => dispatch(deleteComment(id)),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
