import * as APIUtil from "../util/comments_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});

export const createComment = comment => dispatch =>
  APIUtil.createComment(comment).then(commentResponse => {
    commentResponse.username = comment.comment.username;
    debugger;
    dispatch(receiveComment(commentResponse));
  });

export const deleteComment = commentId => dispatch =>
  APIUtil.deleteComment(commentId).then(comment =>
    dispatch(removeComment(comment))
  );

export const fetchComments = postId => dispatch => {
  APIUtil.fetchComments(postId).then(comments =>
    dispatch(receiveComments(comments))
  );
};
